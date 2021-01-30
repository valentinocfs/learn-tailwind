import React from 'react';

const Apply = () => {
  return (
    <>
        <div className="w-8/12 bg-gray-200 rounded-lg shadow-lg  p-8 flex flex-wrap">
            <div className="my-3 mx-3">
                <button className="button btn-primary">Primary</button>
            </div>
            <div className="my-3 mx-3">
                <button className="button btn-danger">Danger</button>
            </div>
            <div className="my-3 mx-3">
                <button className="button btn-warning">Warning</button>
            </div>
            <div className="my-3 mx-3">
                <button className="button btn-success">Success</button>
            </div>
            <div className="my-3 mx-3">
                <button className="button btn-secondary">Secondary</button>
            </div>
            <div className="my-3 mx-3">
                <p className="mt-8">* Mempunyai kesamaan propperty sehingga tidak membutuhkan pemanggilan class yang sama dua kali</p>
            </div>
        </div>
    </>
    
  );
}

export default Apply;
