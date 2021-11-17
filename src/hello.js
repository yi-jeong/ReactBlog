import React, { useState } from 'react';

function header() {

  return (

	<>
	<header>
		<div className="container">
			<h1><a>Blog</a></h1>
		</div>
	</header>

	<section>
		<div className="container">

			<div>
				<h2>제목</h2>
				<p>내용</p>
				<p>날짜</p>
			</div>

		</div>
	</section>
	</>

  );
}

export default header;
