import React from 'react';

const BookHead = (props) => {
    return (
        <>
            <h1 class="logo">booklist</h1>
            <div class="buttonDiv">
                <button class="btn" data-key="year" data-value="2021년도">2021년도</button>
                <button class="btn" data-key="year" data-value="2020년도">2020년도</button>
                <button class="btn" data-key="year" data-value="2019년도">2019년도</button>
                <button class="btn" data-key="year" data-value="2018년도">2018년도</button>
            </div>
        </>
    );
};

export default BookHead;