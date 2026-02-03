'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateContent } from '@/lib/ai-actions';

function CreateContent() {
    const searchParams = useSearchParams();
    const template = searchParams.get('template') || 'Content';

    // State
    const [topic, setTopic] = useState('');
    const [tone, setTone] = useState('Professional Tone');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!topic) return;
        setLoading(true);
        setError('');

        try {
            const prompt = `Write a ${template} about ${topic}. Tone: ${tone}. Make it engaging, professional, and formatted in Markdown.`;
            const result = await generateContent(prompt);

            if (result.error) {
                setError(result.error);
            } else {
                setOutput(result.output || '');
            }
        } catch (err) {
            setError('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-outfit">
                    Create New <span className="text-indigo-600">{template}</span>
                </h1>
                <div className="flex gap-3">
                    <button className="px-6 py-2 rounded-full border border-gray-300 font-semibold text-gray-600 hover:bg-gray-50 transition-colors bg-white">
                        Save Draft
                    </button>
                    <button className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                        Export
                    </button>
                </div>
            </div>

            {/* Main Input Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                <div className="mb-6">
                    <textarea
                        className="w-full h-40 p-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none bg-gray-50 text-gray-800 placeholder-gray-400"
                        placeholder="e.g. Write an email for business regarding a new partnership..."
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="relative">
                        <select
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-6 pr-10 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                            <option>Professional Tone</option>
                            <option>Casual Tone</option>
                            <option>Excited Tone</option>
                            <option>Witty Tone</option>
                            <option>Persuasive Tone</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={loading || !topic}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full font-bold shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                Generating...
                            </>
                        ) : (
                            <>
                                Generate <span className="text-xl">✨</span>
                            </>
                        )}
                    </button>
                </div>

                {error && (
                    <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-start gap-3">
                        <span className="text-xl">⚠️</span>
                        <div>
                            <p className="font-medium">{error}</p>
                            {error.includes('API key') && (
                                <p className="mt-2 text-sm text-red-500">
                                    You can get a free API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline font-bold">Google AI Studio</a>.
                                    Add it to your <code>.env.local</code> file as <code>GEMINI_API_KEY</code>.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Toolbar & Output */}
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="flex items-center gap-2 mb-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold">B</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 italic font-serif">I</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 underline">U</button>
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium">
                        Suggest Improvements
                    </button>
                </div>

                {output && (
                    <div className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-100 pb-4">
                            {template} Result
                        </h2>
                        <div className="prose prose-indigo max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap">
                            {output}
                        </div>

                        <div className="flex gap-4 mt-8 pt-6 border-t border-gray-50">
                            <button
                                className="flex-1 py-3 px-6 rounded-xl border border-gray-200 hover:bg-gray-50 font-medium text-gray-600 transition-colors"
                                onClick={() => navigator.clipboard.writeText(output)}
                            >
                                Copy to Clipboard
                            </button>
                            <button
                                className="flex-1 py-3 px-6 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                            >
                                Save Document
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CreateContent />
        </Suspense>
    );
}
