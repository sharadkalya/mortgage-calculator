import React from 'react';
import Slider from '@material-ui/core/Slider';

export const DisplaySliders = (props) => (
    <div className="slider-container">
        <div className="slider">
            <h3>{`Interest ${props.interestRate}%`}</h3>
            <Slider
                min={0.1}
                max={10}
                step={0.01}
                onChange={(e, newValue) => props.sliderChange(e, newValue, 'interest')}
                value={props.interestRate}
            />
        </div>
        <div className="slider">
            <h3>{`Sale Price: $${props.salePrice}`}</h3>
            <Slider
                min={100000}
                max={1000000}
                onChange={(e, newValue) => props.sliderChange(e, newValue, 'salePrice')}
                value={props.salePrice}
            />
        </div>
        <div className="slider">
            <h3>{`Down Payment: $${props.downPayment}`}</h3>
            <Slider
                min={0}
                max={props.salePrice - 10000}
                onChange={(e, newValue) => props.sliderChange(e, newValue, 'downPayment')}
                value={props.downPayment}
            />
        </div>
        <div className="slider">
            <h3>{`Term: ${props.term} Years`}</h3>
            <Slider
                min={1}
                max={30}
                step={1}
                onChange={(e, newValue) => props.sliderChange(e, newValue, 'term')}
                value={props.term}
            />
        </div>
    </div>

);

export default DisplaySliders;
