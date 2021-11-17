import React from 'react';

function CreateList({ tit, txt, onChange, onCreate }){
    return(
    <>
        <div className="ListCreateBox">
            <label >제목</label>
            <input name="tit" value={tit} onChange={onChange}/>
            <label>내용</label>
            <input name="txt" value={txt} onChange={onChange}/>
            <p className="submit"><button onClick={onCreate}>등록</button></p>
        </div>    
    </>    
    );
}

export default CreateList;