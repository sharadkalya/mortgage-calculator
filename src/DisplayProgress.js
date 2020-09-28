import React from 'react';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export const DisplayProgress = (props) => (
    <div className="progress-container">
        <div className="circle-one">
            <CircularProgress
                variant="static"
                value={props.mortgageValue}
                size={250}
            />
        </div>
        <div className="circle-two">
            <CircularProgress
                variant="static"
                value={props.commonValue}
                size={200}
            />
        </div>
        <div className="circle-three">
            <CircularProgress
                variant="static"
                value={props.taxValue}
                size={150}
            />
        </div>
        <div className="mortgage-value">
            <h4>
                {`$${props.emiWithTaxes}`}
            </h4>
        </div>
    </div>

);

export default DisplayProgress;
