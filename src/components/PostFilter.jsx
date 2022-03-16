import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import React from "react";

const PostFilter = ({filter, setFilter}) => {
return (
    <div className="form">
     <MyInput 
        placeholder="Поиск по названию"
        value={filter.query} 
        onChange={event => setFilter({...filter, query: event.target.value})}
     />
     <br/>
     <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options= {[
            {value: "id", name: "Сортировать по номеру"},
            {value: "title", name: "Сортировать по названию"},
            {value: "body", name: "Сортировать по описанию"}
        ]}
      />
    </div>
  );
};

export default PostFilter;
