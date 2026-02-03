'use client';

import { useState } from 'react';
import { generateContent } from '@/lib/ai-actions';
import './Editor.css';

export default function Editor() {
    const [prompt, setPrompt] = useState('');
    const [tone, setTone] = useState('Professional Tone');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setLoading(true);
        setError('');

        try {
            const fullPrompt = `Write content about: ${prompt}. Tone: ${tone}. Make it engaging and formatted in Markdown.`;
            const result = await generateContent(fullPrompt);

            if (result.error) {
                setError(result.error);
            } else {
                setOutput(result.output || '');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="editor-container glass">
            <div className="prompt-box">
                <textarea
                    placeholder="Ask WriteWise to generate a blog, email, or social post..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <div className="prompt-controls">
                    <select
                        className="glass"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                    >
                        <option>Professional Tone</option>
                        <option>Witty & Engaging</option>
                        <option>Urgent & Direct</option>
                        <option>Casual & Friendly</option>
                    </select>
                    <button
                        className="btn-primary"
                        onClick={handleGenerate}
                        disabled={loading || !prompt.trim()}
                        style={{ opacity: loading || !prompt.trim() ? 0.7 : 1 }}
                    >
                        {loading ? 'Generating...' : 'Generate ✨'}
                    </button>
                </div>
            </div>

            {error && (
                <div style={{
                    padding: '16px',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '12px',
                    color: '#dc2626',
                    marginTop: '16px'
                }}>
                    {error}
                </div>
            )}

            <div className="editor-output">
                <div className="output-toolbar">
                    <button className="tool-btn">B</button>
                    <button className="tool-btn italic">I</button>
                    <button className="tool-btn underline">U</button>
                    <div className="divider"></div>
                    <button className="tool-btn">Suggest Improvements</button>
                </div>
                <div className="output-content" contentEditable="true" suppressContentEditableWarning>
                    {output ? (
                        <div style={{ whiteSpace: 'pre-wrap' }}>{output}</div>
                    ) : (
                        <div style={{ color: '#9ca3af', fontStyle: 'italic' }}>
                            Your AI-generated content will appear here...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
