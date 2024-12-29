import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className='align-items-center d-flex justify-content-center' style={{ height: '800px' }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;