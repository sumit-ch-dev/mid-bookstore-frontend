import React, { useState } from 'react';
import BookItem from '../../components/bookItem/bookItem.component';
import FormInput from '../../components/form-input/form-input.component';
const Shop = ({ books }) => {
    const [filter, setFilter] = useState('');

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <FormInput
                type="text"
                placeholder="Filter books by title"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            {filteredBooks.map(book => (
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    );
};

export default Shop;
