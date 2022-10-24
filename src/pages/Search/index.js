import {ImageGrid} from "../Images";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export default function Search() {
  const {results, searching} = useSelector(state => state.languages);
  const {term} = useParams();

  return <ImageGrid images={results} loadingState={searching} title={term}/>;
}