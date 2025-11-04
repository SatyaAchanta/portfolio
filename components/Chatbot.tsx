'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';

export default function ChatBot() {
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    experimental_throttle: 50
  });
  const [input, setInput] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex w-80 max-h-[70vh] flex-col rounded-xl border border-slate-200 shadow-xl backdrop-blur p-4">
      {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, index) =>
            part.type === 'text' ? <span key={index}>{part.text}</span> : null,
          )}
        </div>
      ))}

      {(status === 'submitted' || status === 'streaming') && <div>
          {status === 'submitted' && <p>Loading....</p>}
          <button type="button" onClick={() => stop()}>
            Stop
          </button>
        </div>}

      <form
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput('');
          }
        }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={status !== 'ready'}
          placeholder="Ask me anything..."
        />
        <button type="submit" disabled={status !== 'ready'} className='bg-amber-500 text-white px-4 py-2 rounded ml-2'>
          Submit
        </button>
      </form>
    </div>
  );
}