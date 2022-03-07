import React, { useCallback, useEffect, useState } from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Provider, observer } from "mobx-react";
import { useStores } from "../../stores/index";
import { useNavigate  } from 'react-router-dom';
import { ROUTES } from "../../shared/constants";

const Home = observer(() => {
  const { Search } = Input;
  const navigate = useNavigate();

  const onSearch = (value: any) => console.log(value);
  const addRecipe = (value: any) => navigate(ROUTES.addRecipe);
  const { tagsStore } = useStores();

  useEffect(() => {
    tagsStore.loadHashtags();
  }, []);

  let hashtags = tagsStore.getHashtags();
  return (
    <div>
      <div className="searchinput">
        <Search placeholder="Поиск" onSearch={onSearch} enterButton />
      </div>
      <div className="hashtags">
        {hashtags.map((el) => {
          return <Button key={el.id}>{el.name}</Button>;
        })}
      </div>
      <div className="mainbtns">
        <Button type="primary" className="searchbtn" icon={<SearchOutlined />}>
          Найти
        </Button>
        <Button type="primary" onClick={addRecipe} >
          Добавить рецепт
        </Button>
      </div>
    </div>
  );
});
export default Home;
