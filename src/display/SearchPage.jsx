import React, { useContext, useEffect, useMemo, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { like, likes, setLikes, add, remove, setLike, LikesContext } from "../context/LikesContext";
import DataDisplay from "../components/SearchDisplay";
import useAxios from "../hook/useAxios";

function SearchPage() {
    const [url, setUrl] = useState("");
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState("g");
    const { searchResults, setSearchResults } = useContext(SearchContext);
    const { likes, add, remove } = useContext(LikesContext);
    const { data: data, error } = useAxios(url);
    const likesIDs = useMemo(
        () => likes.map((val) => val.data_id),
        [likes]
    );

    useEffect(() => {
        if (data) {
            setSearchResults(data);
        }
    }, [data, setSearchResults]);

    function SearchPage(props) {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <h1 className="my-4 col-12 text-center">Gif Search</h1>
                <form className="col-11 d-flex flex-wrap">
                    <div className="mb-3 mx-2 search">
                        <label htmlFor="search" className="form-label">
                            Search
                        </label>
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            className="form-control"
                            id="search"
                            placeholder="Bears"
                        />
                    </div>
                    <div className="col-12">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (search.length > 0) {
                                    setUrl(`&q=${search}`);
                                }
                            }}
                            type="submit"
                            className="btn btn-dark d-block ms-auto"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="col-12 d-flex flex-wrap mt-4">
                    {error && error}
                    {data &&
                        data.length > 0 &&
                        searchResults.map((d) => (
                            <DataDisplay
                                data={d}
                                key={d.data_id}
                                add={add}
                                remove={remove}
                                isLikes={likesIDs.includes(d.data_id)}
                            />
                        ))}
                    {data && data.length === 0 && (
                        <h3 className="text-center col-12">No results found</h3>
                    )}
                </div>
            </div>
        );
    }
}
export default SearchPage;