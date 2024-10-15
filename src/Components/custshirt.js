import './customizes.css';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { useNavigate } from 'react-router-dom';


function Customizer() {
    const [text, setText] = useState('');
    const [textColor, setTextColor] = useState('#000000');
    const [image, setImage] = useState('./images/custshirt/cs6.jpg');
    const [shirtSize, setShirtSize] = useState('M');
    const [fontFamily, setFontFamily] = useState('Arial');
    const [fontWeight, setFontWeight] = useState('normal');
    const [showControls, setShowControls] = useState(false);
    
    const [history, setHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [imageSize, setImageSize] = useState(100); // New state for image size

    const navigate = useNavigate();
    const textRef = useRef();

    const updateState = (newState) => {
        const updatedState = {
            text,
            textColor,
            image,
            shirtSize,
            fontFamily,
            fontWeight,
            ...newState
        };

        const newHistory = history.slice(0, currentIndex + 1);
        newHistory.push(updatedState);

        setHistory(newHistory);
        setCurrentIndex(newHistory.length - 1);
        
        Object.keys(newState).forEach(key => {
            if (key === 'text') setText(newState[key]);
            else if (key === 'textColor') setTextColor(newState[key]);
            else if (key === 'image') setImage(newState[key]);
            else if (key === 'shirtSize') setShirtSize(newState[key]);
            else if (key === 'fontFamily') setFontFamily(newState[key]);
            else if (key === 'fontWeight') setFontWeight(newState[key]);
        });
    };

    const handleTextChange = (newText) => updateState({ text: newText });
    const handleTextColorChange = (newColor) => updateState({ textColor: newColor });
    const handleShirtSizeChange = (size) => updateState({ shirtSize: size });

    const handleImageColorChange = (color) => {
        let newImage;
        switch (color) {
            case 'grey':
                newImage = './images/custshirt/cs5.jpg';
                break;
            case 'ligreen':
                newImage = './images/custshirt/cs2.jpg';
                break;
            case 'lib':
                newImage = './images/custshirt/cs4.jpg';
                break;
            case 'navey':
                newImage = './images/custshirt/cs6.jpg';
                break;
            case 'rose':
                newImage = './images/custshirt/cs7.jpg';
                break;
            case 'yellow':
                newImage = './images/custshirt/cs9.jpg';
                break;
            case 'sky':
                newImage = './images/custshirt/cs11.jpg';
                break;
            case 'greyb':
                newImage = './images/custshirt/cs5b.jpg';
                break;
            case 'ligreenb':
                newImage = './images/custshirt/cs2b.jpg';
                break;
            case 'libb':
                newImage = './images/custshirt/cs4b.jpg';
                break;
            case 'naveyb':
                newImage = './images/custshirt/cs6b.jpg';
                break;
            case 'roseb':
                newImage = './images/custshirt/cs7b.jpg';
                break;
            case 'yellowb':
                newImage = './images/custshirt/cs9b.jpg';
                break;
            case 'skyb':
                newImage = './images/custshirt/cs11b.jpg';
                break;
            
            
            
            default:
                return;
        }
        updateState({ image: newImage });
    };

    const handleUndo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            const previousState = history[currentIndex - 1];
            setText(previousState.text);
            setTextColor(previousState.textColor);
            setImage(previousState.image);
            setShirtSize(previousState.shirtSize);
            setFontFamily(previousState.fontFamily);
            setFontWeight(previousState.fontWeight);
        }
    };

    const handleRedo = () => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
            const nextState = history[currentIndex + 1];
            setText(nextState.text);
            setTextColor(nextState.textColor);
            setImage(nextState.image);
            setShirtSize(nextState.shirtSize);
            setFontFamily(nextState.fontFamily);
            setFontWeight(nextState.fontWeight);
        }
    };

    const handleAddToCart = () => {
        const product = {
            title: 'Customized T-shirt',
            imgSrc: image,
            price: '₹500',
            discount: '10%',
            text,
            textColor,
            shirtSize,
            fontFamily,
            fontWeight
        };
        navigate('/cdaddcart', { state: product });
    };

    const toggleControls = () => {
        setShowControls(prev => !prev);
    };

    const handleImageSizeChange = () => {
        setImageSize(prevSize => {
            if (prevSize < 150) return prevSize + 25; // Increment size
            return 100; // Reset to default
        });
    };

    return (
        <div className='custom'>
    
            <div className='customizer-container'>
                <div className='customizer-shirt-container'>
                    {image && (
                        <img 
                            src={image} 
                            alt="Design" 
                            className='customizer-shirt-image' 
                            style={{ width: `${imageSize}%` }} // Set the width based on imageSize
                            onClick={handleImageSizeChange} // Click handler to change size
                        />
                    )}
                    {showControls && (
                        <Draggable>
                            <div className='customizer-text' style={{
                                color: textColor,
                                fontSize: '20px',
                                fontFamily: fontFamily,
                                fontWeight: fontWeight,
                                textAlign: 'center',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }} ref={textRef}>
                                {text}
                                <div className="drag-handle" />
                            </div>
                        </Draggable>
                    )}
                </div>

                <button onClick={toggleControls} className='customize-button'>
                    {showControls ? 'Hide Customization' : 'Customize'}
                </button>
                
                {showControls && (
                    <div className='customizer-controls'>
                        <h1>Shirt Customizer</h1>
                        <input 
                            type="text" 
                            placeholder="Enter text" 
                            value={text} 
                            onChange={(e) => handleTextChange(e.target.value)} 
                        />
                        <button onClick={() => handleTextChange('')} className='clear-button'>Clear Text</button>
                        <label>
                            Text color: 
                            <input 
                                type="color" 
                                value={textColor} 
                                onChange={(e) => handleTextColorChange(e.target.value)} 
                            />
                        </label>
                        <label>
                            Select Font:
                            <select value={fontFamily} onChange={(e) => updateState({ fontFamily: e.target.value })}>
                                <option value="Arial">Arial</option>
                                <option value="Courier New">Courier New</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Verdana">Verdana</option>
                            </select>
                        </label>
                        <label>
                            Font Weight:
                            <select value={fontWeight} onChange={(e) => updateState({ fontWeight: e.target.value })}>
                                <option value="normal">Normal</option>
                                <option value="bold">Bold</option>
                                <option value="bolder">Bolder</option>
                                <option value="lighter">Lighter</option>
                            </select>
                        </label>
                        <h3>Color:</h3>
                        <div className='color-buttons'>
                            <button onClick={() => handleImageColorChange('grey')} className='color-button'>
                                <img src='./images/custshirt/cs5.jpg' alt="Grey" />
                            </button>
                            <button onClick={() => handleImageColorChange('ligreen')} className='color-button'>
                                <img src='./images/custshirt/cs2.jpg' alt="Lightgreen" />
                            </button>
                            <button onClick={() => handleImageColorChange('lib')} className='color-button'>
                                <img src='./images/custshirt/cs4.jpg' alt="Lib" />
                            </button>
                            <button onClick={() => handleImageColorChange('navey')} className='color-button'>
                                <img src='./images/custshirt/cs6.jpg' alt="navey" />
                            </button>
                            <button onClick={() => handleImageColorChange('rose')} className='color-button'>
                                <img src='./images/custshirt/cs7.jpg' alt="Rose" />
                            </button>
                            <button onClick={() => handleImageColorChange('yellow')} className='color-button'>
                                <img src='./images/custshirt/cs9.jpg' alt="yellow" />
                            </button>
                            <button onClick={() => handleImageColorChange('sky')} className='color-button'>
                                <img src='./images/custshirt/cs11.jpg' alt="sky" />
                            </button>
                        </div>
                        <div className='color-buttons'>
                        <button onClick={() => handleImageColorChange('greyb')} className='color-button'>
                                <img src='./images/custshirt/cs5b.jpg' alt="Grey" />
                            </button>
                            <button onClick={() => handleImageColorChange('ligreenb')} className='color-button'>
                                <img src='./images/custshirt/cs2b.jpg' alt="Lightgreen" />
                            </button>
                            <button onClick={() => handleImageColorChange('libb')} className='color-button'>
                                <img src='./images/custshirt/cs4b.jpg' alt="Lib" />
                            </button>
                            <button onClick={() => handleImageColorChange('naveyb')} className='color-button'>
                                <img src='./images/custshirt/cs6b.jpg' alt="navey" />
                            </button>
                            <button onClick={() => handleImageColorChange('roseb')} className='color-button'>
                                <img src='./images/custshirt/cs7b.jpg' alt="Roseb" />
                            </button>
                            <button onClick={() => handleImageColorChange('yellowb')} className='color-button'>
                                <img src='./images/custshirt/cs9b.jpg' alt="yellow" />
                            </button>
                            <button onClick={() => handleImageColorChange('skyb')} className='color-button'>
                                <img src='./images/custshirt/cs11b.jpg' alt="sky" />
                            </button>                    
                        </div>
                        <h3>Size:</h3>
                        <div>
                            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                <button 
                                    key={size}
                                    onClick={() => handleShirtSizeChange(size)}
                                    style={{
                                        backgroundColor: shirtSize === size ? '#007bff' : '#e0e0e0',
                                        color: '#000',
                                        margin: '5px',
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div>
                            <button onClick={handleUndo} style={{ margin: '5px' }} disabled={currentIndex <= 0}>↶ Undo</button>
                            <button onClick={handleRedo} style={{ margin: '5px' }} disabled={currentIndex >= history.length - 1}>↷ Redo</button>
                        </div>
                        <button onClick={handleAddToCart} className='add-to-cart-button'>Add to Cart</button>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default Customizer;
