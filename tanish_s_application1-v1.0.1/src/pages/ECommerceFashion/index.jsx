import React from "react";
import {RadioButton, ShoppingCart} from "phosphor-react"
import {
  Text,
  Img,
  Button,
  Line,
  Slider,
  PagerIndicator,
  List,
} from "components";
import colors from "tailwindcss/colors";

const ECommerceFashionPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-frankruhllibre items-center justify-start mx-[auto] overflow-auto w-[100%]">
        <div className="flex flex-col gap-[113px] md:gap-[40px] items-center justify-start w-[100%]">
          <div className="h-[4489px] md:px-[20px] relative w-[100%]">
            <div
              className="bg-cover bg-no-repeat flex font-lato h-[900px] items-end justify-start mb-[-177px] mx-[auto] p-[49px] sm:px-[20px] md:px-[40px] w-[100%] z-[1]"
              style={{ backgroundImage: "url('images/img_01header.png')" }}
            >
              <div className="flex flex-col md:gap-[40px] gap-[94px] items-start justify-start mb-[63px] mr-[34px] md:w-[100%] w-[90%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[95%]">
                  <Text
                    className="font-black md:mt-[0] mt-[7px] text-black_900 text-left tracking-[1.84px] uppercase"
                    variant="body3"
                  >
                    Shop-
                    <br />
                    name
                  </Text>
                  <div className="flex flex-row gap-[200px] items-start justify-start md:ml-[0] ml-[443px] md:mt-[0] mt-[16px] w-[auto]">
                    <button
                      className="font-black text-gray_900 text-left tracking-[1.84px] uppercase w-[auto]"
                      variant="body3"
                    >
                      Women
                    </button>
                    <button
                      className="font-black text-gray_900 text-left tracking-[1.84px] uppercase w-[auto]"
                      variant="body3"
                    >
                      Collection
                    </button>
                    <button
                      className="font-black text-gray_900 text-left tracking-[1.84px] uppercase w-[auto]"
                      variant="body3"
                    >
                      Trends
                    </button>
                  </div>
                  <ShoppingCart
                    height={38}
                    // md:ml={0}
                    // margin-left={298}
                    // margin-right={100}
                    // margin-top={4}
                    width={1000}


                    // className={"h-[35px] md:ml-[0] ml-[298px] md:mt-[0] mt-[4px] w-[35px]"}
                    
                  />
                  
                  <Button className="border-[1px] border-gray_900 border-solid cursor-pointer font-bold leading-[normal] md:ml-[0] width-[700px] ml-[40px] p-[13px] text-[14px] text-center text-gray_900 tracking-[0.70px] uppercase w-[108px]">
                    Login
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="capitalize font-frankruhllibre leading-[78.00px] text-gray_900 text-left w-[100%]"
                      as="h1"
                      variant="h1"
                    >
                      Find the Best Fashion Style for You
                    </Text>
                    <Text
                      className="capitalize font-lato font-normal leading-[180.00%] md:ml-[0] ml-[2px] mt-[31px] not-italic text-gray_900 text-left sm:w-[100%] w-[88%]"
                      as="h6"
                      variant="h6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ullamcorper congue eros, eget tincidunt ipsum eleifend
                      ut.{" "}
                    </Text>
                    <div className="font-lato md:h-[108px] h-[70px] mt-[44px] relative w-[43%]">
                      <div className="absolute backdrop-opacity-[0.5] bg-gray_900_ab blur-[41.00px] bottom-[0] h-[35px] inset-x-[0] mx-[auto] w-[84%]"></div>
                      <Button className="absolute bg-gray_900 cursor-pointer font-black inset-x-[0] mx-[auto] p-[24px] sm:px-[20px] rounded-[2px] text-[18px] text-center text-white_A700 top-[0] uppercase w-[223px]">
                        SHOP NOW
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_union.svg"
                    className="h-[600px] w-[auto]"
                    alt="Union"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[114px] md:gap-[40px] items-center justify-start mb-[undefinedpx] ml-[129px] mt-[auto] w-[20%] z-[1]">
              {/* <Img
                src="images/img_7646785910511.png"
                className="h-[327px] md:h-[auto] object-cover w-[100%]"
                alt="7646785910518"
              /> */}
              {/* <Img
                src="images/img_7646785910511.png"
                className="h-[334px] md:h-[auto] object-cover w-[97%]"
                alt="76467859105112"
              /> */}
            </div>
            <div className="flex flex-col mt-[auto] mx-[auto] w-[100%]">
              <div
                className="bg-cover bg-no-repeat flex h-[3230px] items-center justify-start mx-[auto] py-[273px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group9.png')" }}
              >
                <div className="flex flex-col justify-start mb-[295px] w-[100%]">
                  <div className="flex items-center justify-start md:ml-[0] ml-[153px] md:w-[100%] w-[85%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Text
                        className="capitalize font-frankruhllibre text-center text-gray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        New Collection
                      </Text>
                      <Text
                        className="capitalize font-lato mt-[22px] not-italic text-center text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed ullamcorper congue                              
                      </Text>
                      <div className="flex md:flex-col flex-row font-lato md:gap-[40px] items-center justify-between mt-[50px] w-[100%]">
                        <div className="md:h-[417px] h-[493px] relative md:w-[100%] w-[30%]">
                          <div className="absolute bottom-[0] h-[417px] inset-x-[0] mx-[auto] w-[100%]">
                            <Img
                              src="images/img_image.png"
                              className="h-[429px] m-[auto] object-cover w-[100%]"
                              alt="Image"
                            />
                            <Button   className="absolute bg-gray_900 bottom-[-2%] cursor-pointer font-black mx-[auto] inset-x-[0] leading-[normal] min-w-[317px] p-[24px] sm:px-[20px] mx-[auto]  text-[18px] text-center text-white_A700 uppercase top-[2] w-[auto]">
                              SWEATERrrrrrr
                            </Button>
                            
                          {/* <Button className="absolute bg-gray_900 cursor-pointer font-black inset-x-[0] mx-[auto] p-[24px] sm:px-[20px] rounded-[2px] text-[18px] text-center text-white_A700 top-[0] uppercase w-[auto]">
                        Long Sleeve 
                      </Button> */}
                          </div>
                          <Img
                            src="images/img_7646785910511.png"
                            className="absolute h-[411px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                            alt="7646785910511"
                          />
                        </div>
                        <div className="h-[507px] relative md:w-[100%] w-[30%]">
                          <div className="h-[507px] m-[auto] w-[100%]">
                            <Img
                              src="images/img_image.png"
                              className="h-[507px] m-[auto] object-cover w-[100%]"
                              alt="Image Two"
                            />
                            <div className="absolute bg-white_A700 bottom-[5%] flex inset-x-[0] items-center justify-start mx-[auto] p-[22px] sm:px-[20px] w-[auto]">
                              {/* <button
                                className="font-black mb-[6px] text-center text-gray_900 uppercase w-[auto]"
                                variant="body2"
                              >
                                Long Sleeve
                              </button> */}
                               <Button className="absolute bg-gray_900 cursor-pointer font-black inset-x-[0] mx-[auto] p-[24px] sm:px-[20px] rounded-[2px] text-[18px] text-center text-white_A700 top-[0] uppercase w-[auto]">
                        Long Sleeve 
                      </Button>
                            </div>
                          </div>
                          <Img
                            src="images/img_7646785910511.png"
                            className="absolute h-[411px] inset-x-[0] mx-[auto] object-cover top-[0] w-[99%]"
                            alt="7646785910512"
                          />
                        </div>
                        <div className="h-[507px] relative md:w-[100%] w-[37%]">
                          <div className="absolute bg-red_100_6d bottom-[0] flex h-[285px] items-end justify-end p-[34px] sm:px-[20px] right-[0] w-[285px]">
                            <Img
                              src="images/img_vector.svg"
                              className="h-[107px] mb-[2px] mt-[108px] w-[auto]"
                              alt="Vector"
                            />
                          </div>
                          <div className="absolute h-[507px] inset-y-[0] left-[0] my-[auto] w-[83%]">
                            <div className="h-[507px] m-[auto] w-[100%]">
                              <Img
                                src="images/img_image.png"
                                className="h-[507px] m-[auto] object-cover w-[100%]"
                                alt="Image Four"
                              />
                              <div className="absolute bg-white_A700 bottom-[5%] flex inset-x-[0] items-center justify-start mx-[auto] p-[22px] sm:px-[20px] w-[auto]">
                                {/* <button
                                  className="font-black mb-[6px] text-center text-gray_900 uppercase w-[auto]"
                                  variant="body2"
                                >
                                  T-SHirt
                                </button> */}
                                 <Button className="absolute bg-gray_900 cursor-pointer font-black inset-x-[0] mx-[auto] p-[24px] sm:px-[20px] rounded-[2px] text-[18px] text-center text-white_A700 top-[0] uppercase w-[auto]">
                        Long Sleeve 
                      </Button>
                              </div>
                            </div>
                            <Img
                              src="images/img_7646785910511.png"
                              className="absolute h-[411px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                              alt="7646785910513"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[747px] md:h-[755px] md:ml-[0] ml-[89px] mt-[93px] relative md:w-[100%] w-[85%]">
                    <div className="md:h-[662px] h-[747px] m-[auto] w-[100%]">
                      <Img
                        src="images/img_image.png"
                        className="absolute h-[662px] inset-y-[0] left-[5%] my-[auto] object-cover w-[44%]"
                        alt="Rectangle143"
                      />
                      <div className="absolute bg-red_100 border-[1px] border-red_100 border-solid bottom-[0] h-[182px] left-[0] w-[182px]"></div>
                      <div className="absolute bottom-[6%] flex h-[173px] md:h-[567px] justify-end right-[2%] md:w-[100%] w-[61%]">
                        <div className="backdrop-opacity-[0.5] bg-gray_900_65 blur-[95.00px] h-[118px] mt-[auto] mx-[auto] w-[90%]"></div>
                        <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                          <div className="flex md:flex-1 flex-col gap-[11px] items-center justify-start md:ml-[0] ml-[13px] md:w-[100%] w-[auto]">
                            <Text
                              className="capitalize font-frankruhllibre text-center text-gray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              2014
                            </Text>
                            <Text
                              className="capitalize font-lato font-normal not-italic text-center text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              FiFash Founded
                            </Text>
                          </div>
                          <Line className="bg-gray_900_65 md:h-[1px] h-[56px] mb-[18px] md:ml-[0] ml-[58px] md:mt-[0] mt-[11px] md:w-[100%] w-[1px]" />
                          <div className="flex md:flex-1 flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[65px] md:w-[100%] w-[auto]">
                            <Text
                              className="capitalize font-frankruhllibre text-center text-gray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="md:text-[38px] sm:text-[36px] text-gray_900 text-[40px] font-bold">
                                8900
                              </span>
                              <span className="md:text-[38px] sm:text-[36px] text-gray_900 text-[40px] font-lato font-bold">
                                +
                              </span>
                            </Text>
                            <Text
                              className="capitalize font-lato font-normal not-italic text-center text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              Product Sold
                            </Text>
                          </div>
                          <Line className="bg-gray_900_65 md:h-[1px] h-[56px] mb-[18px] md:ml-[0] ml-[65px] md:mt-[0] mt-[11px] md:w-[100%] w-[1px]" />
                          <div className="flex md:flex-1 flex-col gap-[10px] items-center justify-start md:ml-[0] ml-[64px] md:w-[100%] w-[auto]">
                            <Text
                              className="capitalize font-frankruhllibre text-center text-gray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="md:text-[38px] sm:text-[36px] text-gray_900 text-[40px] font-bold">
                                3105
                              </span>
                              <span className="md:text-[38px] sm:text-[36px] text-gray_900 text-[40px] font-lato font-bold">
                                +
                              </span>
                            </Text>
                            <Text
                              className="capitalize font-lato font-normal not-italic text-center text-gray_900 w-[auto]"
                              variant="body2"
                            >
                              Best Reviews
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[35px] items-start justify-start right-[0] top-[10%] w-[auto]">
                        <Text
                          className="capitalize font-frankruhllibre leading-[78.00px] text-gray_900 text-left w-[100%]"
                          as="h2"
                          variant="h2"
                        >
                          Best Fashion Since 2014
                        </Text>
                        <Text
                          className="capitalize font-lato leading-[180.00%] md:ml-[0] ml-[2px] not-italic text-gray_900 text-left sm:w-[100%] w-[85%]"
                          variant="body1"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed ullamcorper congue eros, eget tincidunt
                          ipsum eleifend ut orem ipsum dolor sit amet
                          consectetur adipiscing elit Sed ullamcorper congue
                          eros eleifend ut tincidunt ipsum .
                        </Text>
                      </div>
                      <Img
                        src="images/img_vector.svg"
                        className="absolute h-[107px] left-[41%] top-[0] w-[auto]"
                        alt="Vector One"
                      />
                    </div>
                    <Img
                      src="images/img_7646785910511.png"
                      className="absolute h-[584px] left-[6%] object-cover top-[0] w-[43%]"
                      alt="7646785910517"
                    />
                  </div>
                  <div className="mt-[112px] overflow-x-auto w-[100%]">
                    <div className="flex relative w-[100%]">
                      <div className="h-[743px] md:h-[996px] m-[auto] w-[100%]">
                        <div className="bg-gray_800 flex h-[100%] items-center justify-end m-[auto] w-[100%]">
                          <Img
                            src="images/img_vector_333x1439.png"
                            className="h-[333px] sm:h-[auto] mt-[409px] object-cover md:w-[100%] w-[auto]"
                            alt="Vector Two"
                          />
                        </div>
                        <div className="absolute bottom-[8%] flex md:flex-col flex-row gap-[33px] inset-x-[0] items-start justify-start mx-[auto] w-[80%]">
                          <div className="flex flex-col items-start justify-start md:mt-[0] mt-[31px] md:w-[100%] w-[32%]">
                            <Text
                              className="capitalize font-frankruhllibre text-left text-white_A700 w-[100%]"
                              as="h3"
                              variant="h3"
                            >
                              Best Seller Product
                            </Text>
                            <Text
                              className="capitalize font-lato leading-[180.00%] mt-[23px] not-italic text-left text-white_A700 sm:w-[100%] w-[86%]"
                              variant="body1"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed ullamcorper congue eros
                            </Text>
                            <Button className="border-[1px] border-solid border-white_A700 cursor-pointer font-bold font-lato leading-[normal] mt-[55px] p-[13px] text-[14px] text-center text-white_A700 tracking-[0.70px] uppercase w-[193px]">
                              See mORE
                            </Button>
                          </div>
                          <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] w-[66%]">
                            <Slider
                              autoPlay
                              autoPlayInterval={2000}
                              activeIndex={sliderState}
                              responsive={{
                                0: { items: 1 },
                                550: { items: 1 },
                                1050: { items: 2 },
                              }}
                              onSlideChanged={(e) => {
                                setsliderState(e?.item);
                              }}
                              ref={sliderRef}
                              className="gap-[25px] w-[100%]"
                              items={[...Array(10)].map(() => (
                                <React.Fragment key={Math.random()}>
                                  <div className="md:h-[444px] h-[538px] mx-[10px] relative">
                                    <div className="h-[538px] m-[auto] w-[100%]">
                                      <Img
                                        src="images/img_image.png"
                                        className="h-[387px] mb-[-26px] mx-[auto] object-cover w-[100%] z-[1]"
                                        alt="Image Nine"
                                      />
                                      <div className="bg-white_A700 flex items-start justify-end mt-[auto] mx-[auto] p-[32px] sm:px-[20px] rounded-[6px] w-[100%]">
                                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[6px] mt-[29px] md:w-[100%] w-[51%]">
                                          <Img
                                            src="images/img_group65.svg"
                                            className="h-[12px] w-[auto]"
                                            alt="GroupSixtyFive"
                                          />
                                          <Text
                                            className="font-bold mt-[14px] text-gray_900 text-left w-[auto]"
                                            variant="body2"
                                          >
                                            Pastel Long Sleeve
                                          </Text>
                                          <div className="flex flex-row font-lato gap-[13px] items-center justify-start mt-[11px] md:w-[100%] w-[59%]">
                                            <Text
                                              className="capitalize font-normal line-through not-italic text-left text-red_A700_6c w-[auto]"
                                              variant="body3"
                                            >
                                              $220
                                            </Text>
                                            <Text
                                              className="capitalize font-bold text-gray_900_ab text-left w-[auto]"
                                              variant="body3"
                                            >
                                              $140
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_7646785910511.png"
                                      className="absolute h-[444px] inset-x-[0] mx-[auto] object-cover top-[0] w-[99%]"
                                      alt="7646785910514"
                                    />
                                  </div>
                                </React.Fragment>
                              ))}
                              renderDotsItem={({ isActive }) => {
                                if (isActive) {
                                  return (
                                    <div className="inline-block cursor-pointer rounded-[50%] h-[13px] border-red_100 border-[1px] border-solid bg-red_100 w-[13px]" />
                                  );
                                }
                                return (
                                  <div
                                    className="inline-block cursor-pointer rounded-[50%] h-[13px] border-red_100 border-[1px] border-solid w-[13px]"
                                    role="button"
                                    tabIndex={0}
                                  />
                                );
                              }}
                            />
                            <PagerIndicator
                              className="flex h-[13px] w-[97px]"
                              count={5}
                              activeCss="inline-block cursor-pointer rounded-[50%] h-[13px] border-red_100 border-[1px] border-solid bg-red_100 w-[13px]"
                              activeIndex={sliderState}
                              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[13px] border-red_100 border-[1px] border-solid w-[13px]"
                              sliderRef={sliderRef}
                              selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                              unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_7646785910516.png"
                          className="absolute h-[444px] object-cover right-[0] top-[14%] w-[10%]"
                          alt="7646785910516"
                        />
                      </div>
                      <div className="h-[538px] ml-[-125px] my-[auto] w-[26%] z-[1]">
                        <Img
                          src="images/img_image.png"
                          className="h-[387px] mb-[-26px] mx-[auto] object-cover w-[100%] z-[1]"
                          alt="Image Sixteen"
                        />
                        <div className="bg-white_A700 flex items-start justify-end mt-[auto] mx-[auto] p-[32px] sm:px-[20px] rounded-[6px] w-[100%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[6px] mt-[29px] md:w-[100%] w-[51%]">
                            <Img
                              src="images/img_group65.svg"
                              className="h-[12px] w-[auto]"
                              alt="GroupSixtyFive Two"
                            />
                            <Text
                              className="font-bold mt-[14px] text-gray_900 text-left w-[auto]"
                              variant="body2"
                            >
                              Pastel Long Sleeve
                            </Text>
                            <div className="flex flex-row font-lato gap-[13px] items-center justify-start mt-[11px] md:w-[100%] w-[59%]">
                              <Text
                                className="capitalize font-normal line-through not-italic text-left text-red_A700_6c w-[auto]"
                                variant="body3"
                              >
                                $220
                              </Text>
                              <Text
                                className="capitalize font-bold text-gray_900_ab text-left w-[auto]"
                                variant="body3"
                              >
                                $140
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start mt-[-471.27px] mx-[auto] w-[80%] z-[1]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Text
                    className="capitalize text-center text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Our Product
                  </Text>
                  <div className="flex flex-col font-lato gap-[8px] items-start justify-start mt-[41px] md:w-[100%] w-[45%]">
                    <div className="flex sm:flex-col flex-row gap-[45px] items-start justify-start md:ml-[0] ml-[4px] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-black text-gray_900 text-left tracking-[1.73px] uppercase w-[auto]"
                        variant="body4"
                      >
                        Hot
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 text-left tracking-[1.73px] uppercase w-[auto]"
                        variant="body4"
                      >
                        On SALE
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 text-left tracking-[1.73px] uppercase w-[auto]"
                        variant="body4"
                      >
                        Trending Now
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 text-left tracking-[1.73px] uppercase w-[auto]"
                        variant="body4"
                      >
                        New Arrival
                      </Text>
                    </div>
                    <div className="bg-gray_900 h-[2px] w-[9%]"></div>
                  </div>
                  <List
                    className="flex-col font-frankruhllibre gap-[40px] grid items-center mt-[47px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col items-center justify-start pb-[3px] md:w-[100%] w-[24%]">
                        <Img
                          src="images/img_image.png"
                          className="h-[285px] md:h-[auto] object-cover w-[100%]"
                          alt="Image Seventeen"
                        />
                        <Img
                          src="images/img_group65.svg"
                          className="h-[12px] mt-[23px] w-[auto]"
                          alt="Rating"
                        />
                        <Text
                          className="font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          Casual Long Sleeve
                        </Text>
                        <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                          <Text
                            className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                            variant="body5"
                          >
                            $220
                          </Text>
                          <Text
                            className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                            variant="body5"
                          >
                            $140
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[386px] h-[401px] relative md:w-[100%] w-[24%]">
                        <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[3px] w-[100%]">
                          <Img
                            src="images/img_image.png"
                            className="h-[285px] md:h-[auto] object-cover w-[100%]"
                            alt="Image One"
                          />
                          <Img
                            src="images/img_group65.svg"
                            className="h-[12px] mt-[23px] w-[auto]"
                            alt="Rating One"
                          />
                          <Text
                            className="font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                            variant="body3"
                          >
                            Pastel Long Sleeve
                          </Text>
                          <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                            <Text
                              className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                              variant="body5"
                            >
                              $220
                            </Text>
                            <Text
                              className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                              variant="body5"
                            >
                              $140
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_7646785910511.png"
                          className="absolute h-[341px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                          alt="7646785910519"
                        />
                      </div>
                      <div className="md:h-[386px] h-[401px] relative md:w-[100%] w-[24%]">
                        <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[3px] w-[100%]">
                          <Img
                            src="images/img_image.png"
                            className="h-[285px] md:h-[auto] object-cover w-[100%]"
                            alt="Image Three"
                          />
                          <Img
                            src="images/img_group65.svg"
                            className="h-[12px] mt-[23px] w-[auto]"
                            alt="Rating Two"
                          />
                          <Text
                            className="font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                            variant="body3"
                          >
                            Hoodiee Long Sleeve
                          </Text>
                          <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                            <Text
                              className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                              variant="body5"
                            >
                              $220
                            </Text>
                            <Text
                              className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                              variant="body5"
                            >
                              $140
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_7646785910511.png"
                          className="absolute h-[339px] inset-x-[0] mx-[auto] object-cover top-[0] w-[95%]"
                          alt="76467859105110"
                        />
                      </div>
                      <div className="md:h-[386px] h-[401px] relative md:w-[100%] w-[24%]">
                        <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[3px] w-[100%]">
                          <Img
                            src="images/img_image.png"
                            className="h-[285px] md:h-[auto] object-cover w-[100%]"
                            alt="Image Five"
                          />
                          <Img
                            src="images/img_group65.svg"
                            className="h-[12px] mt-[23px] w-[auto]"
                            alt="Rating Three"
                          />
                          <Text
                            className="font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                            variant="body3"
                          >
                            Casual Long Sleeve
                          </Text>
                          <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                            <Text
                              className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                              variant="body5"
                            >
                              $220
                            </Text>
                            <Text
                              className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                              variant="body5"
                            >
                              $140
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_7646785910511.png"
                          className="absolute h-[341px] left-[0] object-cover top-[0] w-[94%]"
                          alt="76467859105111"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col items-center justify-start pb-[3px] md:w-[100%] w-[24%]">
                        <Img
                          src="images/img_image.png"
                          className="h-[285px] md:h-[auto] object-cover w-[100%]"
                          alt="Image TwentyOne"
                        />
                        <Img
                          src="images/img_group65.svg"
                          className="h-[12px] mt-[23px] w-[auto]"
                          alt="Rating One"
                        />
                        <Text
                          className="font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          Pastel Long Sleeve
                        </Text>
                        <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                          <Text
                            className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                            variant="body5"
                          >
                            $220
                          </Text>
                          <Text
                            className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                            variant="body5"
                          >
                            $140
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start pb-[3px] md:w-[100%] w-[24%]">
                        <div className="h-[320px] relative w-[100%]">
                          <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                            <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_image.png"
                                className="h-[285px] md:h-[auto] object-cover w-[100%]"
                                alt="Image One One"
                              />
                              <Img
                                src="images/img_group65.svg"
                                className="h-[12px] w-[auto]"
                                alt="Rating One One"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_7646785910511.png"
                            className="absolute bottom-[0] h-[307px] inset-x-[0] mx-[auto] object-cover w-[99%]"
                            alt="76467859105113"
                          />
                        </div>
                        <Text
                          className="font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                          variant="body3"
                        >
                          Hoodiee Long Sleeve
                        </Text>
                        <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                          <Text
                            className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                            variant="body5"
                          >
                            $220
                          </Text>
                          <Text
                            className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                            variant="body5"
                          >
                            $140
                          </Text>
                        </div>
                      </div>
                      <div className="h-[388px] relative md:w-[100%] w-[50%]">
                        <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[99%]">
                          <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                            <div className="flex sm:flex-1 flex-col items-center justify-start pb-[3px] sm:w-[100%] w-[48%]">
                              <Img
                                src="images/img_image.png"
                                className="h-[285px] md:h-[auto] object-cover w-[100%]"
                                alt="Image Three One"
                              />
                              <Img
                                src="images/img_group65.svg"
                                className="h-[12px] mt-[23px] w-[auto]"
                                alt="Rating Two One"
                              />
                              <Text
                                className="font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                                variant="body3"
                              >
                                Casual Long Sleeve
                              </Text>
                              <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                                <Text
                                  className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                                  variant="body5"
                                >
                                  $220
                                </Text>
                                <Text
                                  className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                                  variant="body5"
                                >
                                  $140
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-1 flex-col items-center justify-start pb-[3px] sm:w-[100%] w-[48%]">
                              <div className="h-[334px] relative w-[100%]">
                                <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                                  <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                                    <Img
                                      src="images/img_image.png"
                                      className="h-[285px] md:h-[auto] object-cover w-[100%]"
                                      alt="Image Four"
                                    />
                                    <Img
                                      src="images/img_group65.svg"
                                      className="h-[12px] w-[auto]"
                                      alt="Rating Three One"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_7646785910511.png"
                                  className="absolute h-[334px] inset-[0] justify-center m-[auto] object-cover w-[90%]"
                                  alt="76467859105115"
                                />
                              </div>
                              <Text
                                className="font-bold text-center text-gray_900 w-[auto]"
                                variant="body3"
                              >
                                Pastel Long Sleeve
                              </Text>
                              <div className="flex flex-row font-lato gap-[7px] items-center justify-center mt-[11px] md:w-[100%] w-[28%]">
                                <Text
                                  className="capitalize font-normal line-through not-italic text-center text-red_A700_6c w-[auto]"
                                  variant="body5"
                                >
                                  $220
                                </Text>
                                <Text
                                  className="capitalize font-bold text-center text-gray_900_ab w-[auto]"
                                  variant="body5"
                                >
                                  $140
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_7646785910511.png"
                          className="absolute h-[334px] left-[0] object-cover top-[0] w-[55%]"
                          alt="76467859105114"
                        />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[504px] max-w-[1139px] mx-[auto] md:px-[20px] relative w-[100%]">
            <Img
              src="images/img_06discount.png"
              className="h-[504px] m-[auto] object-cover w-[100%]"
              alt="06Discount"
            />
            <Img
              src="images/img_7646785910511.png"
              className="absolute bottom-[0] h-[460px] object-cover right-[10%] w-[34%]"
              alt="76467859105116"
            />
          </div>
        </div>
        <div className="flex items-start justify-start max-w-[2303px] mt-[116px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col items-center justify-start md:w-[100%] w-[82%]">
            <Text
              className="capitalize font-frankruhllibre text-center text-gray_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              What People Say About Us
            </Text>
            <Text
              className="capitalize font-lato mt-[24px] not-italic text-center text-gray_900 w-[auto]"
              variant="body1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue eros
            </Text>
            <div className="font-lato mt-[51px] overflow-x-auto w-[100%]">
              <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  paddingLeft={126}
                  activeIndex={sliderState1}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState1(e?.item);
                  }}
                  ref={sliderRef1}
                  className="gap-[25px] w-[61%]"
                  items={[...Array(10)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div
                        className="bg-cover bg-no-repeat flex h-[389px] items-center justify-end mx-[10px] p-[31px] sm:px-[20px]"
                        style={{
                          backgroundImage:
                            "url('images/img_cardtestimoni.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start mt-[3px] md:w-[100%] w-[88%]">
                          <Text
                            className="capitalize font-black leading-[157.00%] text-center text-gray_900 sm:w-[100%] w-[84%]"
                            variant="body2"
                          >
                            Comfortable and met all my expectations! I ordered a
                            medium and it fit perfectly
                          </Text>
                          <Text
                            className="capitalize font-normal leading-[30.00px] mt-[13px] not-italic text-center text-gray_900_a2 w-[100%]"
                            variant="body5"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacus, auctor pretium ac ultrices. Dui
                            lacus dignissim tincidunt urna, at enim tempo.
                            Pellentesque amet Lorem ipsum dolor sit amet,{" "}
                          </Text>
                          <div className="flex flex-col gap-[14px] items-center justify-start mt-[23px] md:w-[100%] w-[20%]">
                            <Img
                              src="images/img_ellipse5.png"
                              className="h-[77px] md:h-[auto] rounded-[50%] w-[77px]"
                              alt="EllipseFive"
                            />
                            <Text
                              className="capitalize font-bold text-center text-gray_900 w-[auto]"
                              variant="body3"
                            >
                              Anisa Zahra
                            </Text>
                          </div>
                          <Text
                            className="capitalize font-normal mt-[5px] not-italic text-center text-gray_900_87 w-[auto]"
                            variant="body5"
                          >
                            Founder milenial
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-[10px] bg-gray_900 w-[10px]" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-[10px] border-gray_900_79 border-[1px] border-solid w-[10px]"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 h-[389px] items-center justify-start p-[35px] sm:px-[20px] md:w-[100%] w-[30%]"
                  style={{
                    backgroundImage: "url('images/img_cardtestimoni.svg')",
                  }}
                >
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[89%]">
                    <Text
                      className="capitalize font-black leading-[157.00%] text-center text-gray_900 sm:w-[100%] w-[84%]"
                      variant="body2"
                    >
                      I really love this shirt! It feels more like a light
                      flannel than a jacket
                    </Text>
                    <Text
                      className="capitalize font-normal leading-[30.00px] mt-[13px] not-italic text-center text-gray_900_a2 w-[100%]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim
                      tincidunt urna, at enim tempo. Pellentesque amet Lorem
                      ipsum dolor sit amet,{" "}
                    </Text>
                    <Img
                      src="images/img_ellipse5.png"
                      className="h-[77px] md:h-[auto] mt-[23px] rounded-[50%] w-[77px]"
                      alt="EllipseFive Two"
                    />
                    <Text
                      className="capitalize font-bold mt-[14px] text-center text-gray_900 w-[auto]"
                      variant="body3"
                    >
                      Melissa Wallace
                    </Text>
                    <Text
                      className="capitalize font-normal mt-[7px] not-italic text-center text-gray_900_87 w-[auto]"
                      variant="body5"
                    >
                      Founder milenial
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 h-[389px] items-center justify-end p-[31px] sm:px-[20px] md:w-[100%] w-[30%]"
                  style={{
                    backgroundImage: "url('images/img_cardtestimoni.svg')",
                  }}
                >
                  <div className="flex flex-col items-center justify-start mt-[3px] md:w-[100%] w-[88%]">
                    <Text
                      className="capitalize font-black leading-[157.00%] text-center text-gray_900 sm:w-[100%] w-[84%]"
                      variant="body2"
                    >
                      Comfortable and met all my expectations! I ordered a
                      medium and it fit perfectly
                    </Text>
                    <Text
                      className="capitalize font-normal leading-[30.00px] mt-[13px] not-italic text-center text-gray_900_a2 w-[100%]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim
                      tincidunt urna, at enim tempo. Pellentesque amet Lorem
                      ipsum dolor sit amet,{" "}
                    </Text>
                    <div className="flex flex-col gap-[14px] items-center justify-start mt-[23px] md:w-[100%] w-[20%]">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-[77px] md:h-[auto] rounded-[50%] w-[77px]"
                        alt="EllipseFive Three"
                      />
                      <Text
                        className="capitalize font-bold text-center text-gray_900 w-[auto]"
                        variant="body3"
                      >
                        Anisa Zahra
                      </Text>
                    </div>
                    <Text
                      className="capitalize font-normal mt-[5px] not-italic text-center text-gray_900_87 w-[auto]"
                      variant="body5"
                    >
                      Founder milenial
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <PagerIndicator
              className="flex h-[10px] mt-[48px] w-[74px]"
              count={5}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-gray_900 w-[10px]"
              activeIndex={sliderState1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[10px] border-gray_900_79 border-[1px] border-solid w-[10px]"
              sliderRef={sliderRef1}
              selectedWrapperCss="inline-block md:ml-[0] mx-[3.08px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[3.08px] sm:ml-[0]"
            />
          </div>
        </div>
        <div className="font-lato h-[536px] mt-[83px] md:px-[20px] relative w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly mb-[-34px] mx-[auto] w-[100%] z-[1]">
            <Img
              src="images/img_image.png"
              className="h-[288px] md:h-[auto] object-cover w-[288px]"
              alt="One"
            />
            <div className="md:h-[288px] h-[322px] relative md:w-[100%] w-[60%]">
              <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                  <Img
                    src="images/img_image.png"
                    className="h-[288px] md:h-[auto] object-cover w-[288px]"
                    alt="Two"
                  />
                  <Img
                    src="images/img_image.png"
                    className="h-[288px] md:h-[auto] object-cover w-[288px]"
                    alt="Three"
                  />
                  <Img
                    src="images/img_image.png"
                    className="h-[288px] md:h-[auto] object-cover w-[288px]"
                    alt="Four"
                  />
                </div>
              </div>
              <div className="absolute bg-white_A700 bottom-[0] flex inset-x-[0] items-start justify-end mx-[auto] p-[19px] w-[56%]">
                <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[28px] mr-[auto] mt-[5px] md:w-[100%] w-[79%]">
                  <Text
                    className="capitalize font-normal not-italic text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Follow our Instagram :
                  </Text>
                  <Text
                    className="capitalize font-bold text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @username
                  </Text>
                </div>
              </div>
            </div>
            <Img
              src="images/img_image.png"
              className="h-[288px] md:h-[auto] object-cover w-[288px]"
              alt="Five"
            />
          </div>
          <footer className="bg-gray_800 flex items-center justify-center mt-[auto] mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[65px] items-center justify-center w-[31%]">
              <div className="flex sm:flex-col flex-row gap-[45px] items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-black text-left text-white_A700 tracking-[1.84px] uppercase w-[auto]"
                  variant="body3"
                >
                  Woman
                </Text>
                <Text
                  className="font-black text-left text-white_A700 tracking-[1.84px] uppercase w-[auto]"
                  variant="body3"
                >
                  Trends
                </Text>
                <Text
                  className="font-black text-left text-white_A700 tracking-[1.84px] uppercase w-[auto]"
                  variant="body3"
                >
                  Contact US
                </Text>
                <Text
                  className="font-black text-left text-white_A700 tracking-[1.84px] uppercase w-[auto]"
                  variant="body3"
                >
                  FAQ
                </Text>
              </div>
              <Text
                className="capitalize font-normal md:ml-[0] ml-[201px] mr-[28px] not-italic text-center text-white_A700_97 w-[auto]"
                variant="body5"
              >
                © 2021 Name. All Right Reserved
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ECommerceFashionPage;

