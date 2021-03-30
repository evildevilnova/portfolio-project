import React from 'react';


const Window = (props) => {
    return (
        <>
            <div className="modal fade" id={props.idn} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img src={props.img} width="102%" height="100%" />
                </div>
                <div className="modal-footer">
                    <a href={props.code} target="_target" className="btn btn-secondary">view Code</a>
                    <a href={props.site} target="_target" className="btn btn-primary">Visite Site</a>
                </div>
                </div>
            </div>
            </div>    
        </>
    );
};

export default Window
