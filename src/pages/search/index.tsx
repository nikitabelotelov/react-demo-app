import { useSelector, useDispatch } from "react-redux";
import styles from "./search.module.scss";
import { RootState } from "../../store/store";
import { searchSpecialists } from "../../api/search";
import {
  PAGE_SIZE,
  appendSearchResults,
  setSearchQuery,
} from "../../store/slices/searchPageSlice";
import { SearchQuery } from "../../store/types";
import { Form } from "./form";
import { PersonCard } from "../../components/personCard";
import { Button } from "../../components/button";
import { ReactComponent as EmptySearchImage } from "../../static/images/empty_search.svg";

export function Search() {
  const { results, query, total, showEmptyResults } = useSelector(
    (state: RootState) => state.search
  );
  const dispatch = useDispatch();
  const canFetchMore = results.length < total;

  const fetchMore = (query: SearchQuery) => {
    searchSpecialists(query).then((results) => {
      dispatch(appendSearchResults(results));
    });
  };

  return (
    <main className={styles.root}>
      <Form />
      <hr className={styles.separator} />
      <div className={styles.resultsRoot}>
        {results.map((result) => {
          return <PersonCard key={result.userId} item={result} />;
        })}
      </div>
      {showEmptyResults && (
        <div className={styles.emptyBlock}>
          <EmptySearchImage className={styles.emptyImage} />
          <div className={styles.emptyBlockText}>
            К сожалению, нет анкет
            <br /> с такими параметрами
          </div>
        </div>
      )}
      {canFetchMore && (
        // убрать див
        <Button
          className={styles.moreButton}
          //вынести в калбек
          onClick={() => {
            const newQuery = { ...query, offset: query.offset + PAGE_SIZE };
            dispatch(setSearchQuery(newQuery));
            fetchMore(newQuery);
          }}
        >
          Показать еще
        </Button>
      )}
    </main>
  );
}
