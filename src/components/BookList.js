import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
    return (
        <>
            <table class="books">
                <tr>
                    <th>글쓴이</th>
                    <th>제목</th>
                    <th>년도</th>
                </tr>
                <tr>
                    <BookItem text="공유" />
                    <BookItem text="나는 나로 살기로 했다" />
                    <BookItem text="2021년" />
                </tr>
                <tr>
                    <BookItem text="전지현" />
                    <BookItem text="경이로운 소문" />
                    <BookItem text="2021년" />
                </tr>
            </table>
        </>
    );
};

export default BookList;