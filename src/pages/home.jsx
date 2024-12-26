import React, { useEffect, useState } from 'react';
import { Page, Navbar, Block, List, ListItem } from 'framework7-react';
import axios from 'axios';
import JSZip from 'jszip';

const HomePage = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
  try {
    const response = await axios.get('http://api.foroom.ru/uploads/download/zip/data.zip', {
      responseType: 'arraybuffer',
    });
    const zip = await JSZip.loadAsync(response.data);
    const jsonFile = await zip.file('get_all_data.json').async('string');
    const data = JSON.parse(jsonFile);

    console.log('Содержимое JSON:', data);

    if (data && data.data && data.data.izd) {
      console.log('Продукты:', data.data.izd);
      setItems(data.data.izd); 
    } else {
      console.error('Не найдено свойство "izd" в данных');
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
};
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page>
      <Navbar title="Готовая продукция" />
      <Block>
        <List>
            {items.length > 0 ? (
                items.map((item, index) => (
                  <ListItem key={index} title={item.name} />
                    ))
                  ) : (
                <div>Нет данных для отображения</div>
              )}
        </List>
      </Block>
    </Page>
  );
};

export default HomePage;
