import CountryNode from './CountryNode';
import exampleJson from "./../example/example.json";
import {useState, useEffect} from "react";
import TreeNode from "./model/TreeNode";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [countryData, setCountryData] = useState<TreeNode[]>(exampleJson);

  const filterDataTree = (nodes: TreeNode[], searchTerm: string): TreeNode[] => {
      return nodes
        .map((node) => {
          if (node.children) {
            node.children = filterDataTree(node.children, searchTerm?.toLowerCase());
          }
          return node;
        })
        .filter((node) => node.name?.toLowerCase().includes(searchTerm?.toLowerCase()) || (node.children && node.children.length > 0));
    };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(()=>{
      const countryDataResult = filterDataTree(exampleJson, searchText);
      setCountryData(countryDataResult);
  }, [searchText]);
  return (
    <div>
      <input type='text' name="search" value={searchText} onChange={handleSearchText} autoComplete='off'/>
      <br/>
      <CountryNode data={countryData} />
    </div>
  );
};

export default App;
