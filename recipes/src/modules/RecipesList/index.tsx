import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Provider, observer } from "mobx-react";
import { useStores } from "../../stores/index";
import React, { useCallback, useEffect, useState } from "react";

const RecipesList = observer(() => {

  const { tagsStore } = useStores();
  return (
    <div>
      
    </div>
  );
});
export default RecipesList;
