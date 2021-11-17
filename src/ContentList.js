import userEvent from '@testing-library/user-event';
import React from 'react';

function Content({n,onRemove,likeCount}){

    return(
      <div className="ListBox">      
        <dl>
          <dt><b style={{ color: n.active ? '#999' : 'black' }}>{ n.tit }</b></dt>
          <dd>{ n.txt }</dd>
        </dl>
        <p><span className="date">{n.date}</span><span className="emojiWrap"><span className="emoji" onClick={ () => likeCount(n.id) }>💗</span>+{ n.like }<span className="emoji">✉</span>+{ n.com }</span></p>
        <span className="Remove-btn"><a onClick={ () => onRemove(n.id) }>삭제</a></span>
      </div>
    );
  
}

function ContentList({ BlogContent, onRemove, likeCount }){
    return(
        <>
        {BlogContent.map(n => (
            <Content n={n} key={n.id} onRemove={onRemove} likeCount={likeCount} />
        ))}
        </>
    );
}

export default ContentList;