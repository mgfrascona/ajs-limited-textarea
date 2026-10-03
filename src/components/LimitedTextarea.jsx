import { useState, useRef } from 'react';

// for your textarea element:
const textareaStyle = {
    width: '300px',
    height: '150px',
}

// for the paragraph element that displays the character count:
const pStyle = {
    fontFamily: 'monospace',
    fontSize: '14px',
    textAlign: 'right',
    marginTop: '4px',
}

const LimitedTextarea = () => {
    const [text, setText] = useState('')
    const maxLength = 200

    const handleTextChange = ({ target }) => {
        const { value } = target
        value.length <= maxLength ? setText(value) : setText(text)

        value.length > maxLength(`You have exceeded the maximum character limit of ${maxLength}.`)
    }

    return (
        <div>
            <textarea
                style={textareaStyle}
                onChange={handleTextChange}
                value={text}
            >
            </textarea>
            <p style={pStyle}>{text.length}/{maxLength}</p>
        </div>
    )
}

export default LimitedTextarea