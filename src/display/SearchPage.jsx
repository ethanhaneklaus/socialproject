import React from "react";


function SearchPage(props) {
    const LikesIDs = useMemo(
        () => likes.map((val) => val.data_id),
        [likes]
    );

    useEffect(() => {
        if (data) {
            setSearchResults(data);
        }
    }, [data, setSearchResults]);
}

export default SearchPage;