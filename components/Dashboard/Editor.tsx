import './Editor.css';

export default function Editor() {
    return (
        <div className="editor-container glass">
            <div className="prompt-box">
                <textarea placeholder="Ask WriteWise to generate a blog, email, or social post..."></textarea>
                <div className="prompt-controls">
                    <select className="glass">
                        <option>Professional Tone</option>
                        <option>Witty & Engaging</option>
                        <option>Urgent & Direct</option>
                    </select>
                    <button className="btn-primary">Generate ✨</button>
                </div>
            </div>

            <div className="editor-output">
                <div className="output-toolbar">
                    <button className="tool-btn">B</button>
                    <button className="tool-btn italic">I</button>
                    <button className="tool-btn underline">U</button>
                    <div className="divider"></div>
                    <button className="tool-btn">Suggest Improvements</button>
                </div>
                <div className="output-content" contentEditable="true">
                    <h3>How AI Can Supercharge Your Content Marketing</h3>
                    <p>In the rapidly evolving digital landscape, content marketing remains a cornerstone of successful brand strategy. However, the demand for high-quality, relevant content has never been higher, placing immense pressure on marketing teams...</p>
                </div>
            </div>
        </div>
    );
}
