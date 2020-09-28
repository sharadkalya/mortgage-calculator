import React from 'react';

const DisplayResults = (props) => (
    <div class="display-results">
        <div className="common-charges">
            <h5>{`Common Charges: $${props.common}`}</h5>
        </div>
        <div className="mortgage-charges">
            <h5>{`Mortgage: $${props.emi}`}</h5>
        </div>
        <div className="tax-charges">
            <h5>{`Taxes: $${props.tax}`}</h5>
        </div>
    </div>
);

export default DisplayResults;
