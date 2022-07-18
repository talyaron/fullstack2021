import React, { useId } from 'react'

interface ArticleSearchProps {
    handleSearchTerm: Function;
}

const ArticleSearch = (props: ArticleSearchProps) => {
    const { handleSearchTerm } = props;

    const id = useId()

    return (
        <div className="comp-articleSearch">

            <input type="search" name="search" placeholder="Search" id={'search' + id}
                onChange={(e: any) => { handleSearchTerm(e) }}
            />


        </div>
    )
}

export default ArticleSearch