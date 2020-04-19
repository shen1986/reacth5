import React,{
  // useEffect,
  useState, useEffect,
} from 'react';
import {
  NavBar,
  Icon,
  TabBar,
  Carousel,
} from 'antd-mobile';

// import BScroll from 'better-scroll'
import './App.css';
import './components/Icon/style.css'
import productImg from './images/product.jpg'

function App() {

  const [selectedTab, setSelectTab] = useState('redTab')
  const [hidden] = useState(false)
  const [data, setData] = useState(['1', '2', '3'])
  const [imgHeight, setImgHeight] = useState<string | number>(176)

  useEffect(()=> {
    setTimeout(()=>{
      setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
    }, 100)
  },[setData])

  // useEffect(()=> {
  //   const wrapper = document.querySelector('.mui-scroll-wrapper')
  //   new BScroll(wrapper as Element)
  // })

  const renderContent = (pageText: string) => {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 45 }}>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    setImgHeight('auto')
                  }}
                />
              </a>
            ))}
          </Carousel>
          {/* <!--商品--> */}
          <div className="ct_product">
              <div className="pro_item">
                  <div className="pro_item_box">
                      <img src={productImg} alt=""/>
                      {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                      <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                      <button className="button">立即购买</button>
                  </div>
              </div>
              <div className="pro_item">
                  <div className="pro_item_box">
                      <img src={productImg} alt=""/>
                      {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                      <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                      <button className="button">立即购买</button>
                  </div>
              </div>
              <div className="pro_item">
                  <div className="pro_item_box">
                      <img src={productImg} alt=""/>
                      {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                      <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                      <button className="button">立即购买</button>
                  </div>
              </div>
              <div className="pro_item">
                  <div className="pro_item_box">
                      <img src={productImg} alt=""/>
                      {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                      <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                      <button className="button">立即购买</button>
                  </div>
              </div>
              <div className="pro_item">
                  <div className="pro_item_box">
                      <img src={productImg} alt=""/>
                      {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                      <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                      <button className="button">立即购买</button>
                  </div>
              </div>
              <div className="pro_item">
                  <div className="pro_item_box">
                      <img src={productImg} alt=""/>
                      {/* <!--mui-ellipsis-2两行省略  mui-ellipsis 一行省略 --> */}
                      <p className="mui-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700 </p>
                      <p><span className="nowPrice">&yen;560.00</span> <span className="oldPrice">&yen;888.00</span></p>
                      <button className="button">立即购买</button>
                  </div>
              </div>

          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="ct_container">
        <NavBar
          style={{position: "fixed", top: 0, left: 0, right:0, zIndex: 10000}}
          mode="dark"
          icon={<Icon type="left" />}
          rightContent={[
            <Icon key="0" type="search" />
          ]}
        >
          传淘云购
        </NavBar>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize: 24
                }}
                className="icon-home"
              />
            }
            selectedIcon={
            <span
              style={{
                width: '22px',
                height: '22px',
                fontSize: 24,
                color: 'rgb(51, 163, 244)'
              }}
              className="icon-home"
            />
            }
            selected={selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              setSelectTab('blueTab')
            }}
            data-seed="logId"
          >
            {renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize: 24
                }}
                className="icon-bars"
              />
            }
            selectedIcon={
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize: 24,
                  color: 'rgb(51, 163, 244)'
                }}
                className="icon-bars"
              />
            }
            title="分类"
            key="Koubei"
            badge={'new'}
            selected={selectedTab === 'redTab'}
            onPress={() => {
              setSelectTab('redTab')
            }}
            data-seed="logId1"
          >
            {renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize: 24
                }}
                className="icon-shopping-cart"
              />
            }
            selectedIcon={
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize: 24,
                  color: 'rgb(51, 163, 244)'
                }}
                className="icon-shopping-cart"
              />
            }
            title="购物车"
            key="Friend"
            dot
            selected={selectedTab === 'greenTab'}
            onPress={() => {
              setSelectTab('greenTab')
            }}
          >
            {renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize: 24
                }}
                className="icon-user"
              />
            }
            selectedIcon={
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  fontSize: 24,
                  color: 'rgb(51, 163, 244)'
                }}
                className="icon-user"
              />
            }
            title="会员中心"
            key="my"
            selected={selectedTab === 'yellowTab'}
            onPress={() => {
              setSelectTab('yellowTab')
            }}
          >
            {renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  );
}

export default App;
