import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const DescriptionResult = () => {
  const router = useRouter();
  const { data } = router.query;

  const [itemTitle, setItemTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (router.query.data) {
      const parsedData = JSON.parse(router.query.data);
      console.log('Parsed data:', parsedData);

      // 「商品名：」と「商品説明文：」を基準に文字列を分割
      let splitData = parsedData.itemTitle ? parsedData.itemTitle.split("商品説明文：") : ['', ''];
      
      let title = splitData[0].replace("商品名：", '');
      let desc = splitData[1];

      setItemTitle(title);
      setDescription(desc);
    }
  }, [router.query.data]);



  const goBack = () => {
    router.back();
  };

  return (
    <div className='container'>
      <header>
        <div className="logo">
          <img src='assets/logo.svg' alt='Logo' />
        </div>
      </header>
      <main>
        <div className='content-container'> 
          <div className='content-title-container'>
          <h2>商品名</h2>
          <CopyToClipboard text={itemTitle}>
            <button className='ss-button'><FontAwesomeIcon icon={faCopy} className='icon-button'/> コピー</button>
          </CopyToClipboard>
 
          </div>
          <p>{itemTitle}</p>
        </div>
        <div className='content-container'> 
          <div className='content-title-container'>
            <h2>商品説明</h2>
            <CopyToClipboard text={description}>
              <button className='ss-button'><FontAwesomeIcon icon={faCopy}   className='icon-button'/> コピー</button>
            </CopyToClipboard>
            </div>
            <p>{description}</p>

        </div>
        <span>
          <button className='small-button' onClick={goBack}>もう一度つくる</button>
        </span>
      </main>  
      <footer>
        <span>@copyright Handa Panda</span>
      </footer>
    </div>   
  );
}

export default DescriptionResult;
