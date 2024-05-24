/** 
 * @authur Lin-Hank 
 * @mail 001linhank@gmail.com
*/

import Link from "next/link";
import Image from "next/image";
  import { 
    Navbar, 
    NavbarBrand, 
    NavbarCollapse, 
    NavbarLink, 
    NavbarToggle, 
    Footer,
    FooterCopyright,
    FooterBrand, 
    FooterDivider, 
    FooterLink, 
    FooterLinkGroup,
    Carousel,
    Card,
    Button,
    DarkThemeToggle,
  } from "flowbite-react";

  export default function Component() {

    const items = [
      {
        cover:"/taitong-image/八拱跨海步橋.jpg",
        name:"八拱跨海步橋",
        description:"是一座橋",
      },
      {
        cover:"/taitong-image/台東-小火車.jpg",
        name:"台東~小火車",
        description:"搭火車享受穿梭山林的樂趣",
      },
      {
        cover:"/taitong-image/台東-小野柳.jpg",
        name:"台東~小野柳",
        description:"快斷頭的女王峰",
      },
      {
        cover:"taitong-image/花東 伯朗大道.jpg",
        name:"台東~伯朗大道",
        description:"只有大道，你在期待甚麼",
      },
    ]

    return (
      <>
      <div className="bg-teal-50">
        <div className="container , mx-auto ">
          <Navbar fluid className="bg-teal-50" >
            <NavbarBrand as={Link} href="https://flowbite-react.com">
              <img src="https://www.airtmd.com/media/p/131/rhOYfady/0.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="text-blue-400 hover:text-red-500" >
              <NavbarLink href="https://www.yuntech.edu.tw/">
                <span className="px-4 py-2 hover:text-yellow-500 
                hover:border-yellow-500
                hover:border-b-2
                "></span>
                首頁
              </NavbarLink>
              <NavbarLink as={Link} href="#" className = "hover:underline" >
                關於我們
              </NavbarLink>
              <NavbarLink href="#" className = "hover:underline">服務內容</NavbarLink>
              <NavbarLink href="#" className = "hover:underline">旅遊安排</NavbarLink>
              <NavbarLink href="#" className = "hover:underline">聯絡我們</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle></DarkThemeToggle>
          </Navbar>
        </div>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/taitong-image/八拱跨海步橋.jpg" alt="由 Mark Kao - https://www.flickr.com/photos/67415843@N05/43923096555/, CC0, https://commons.wikimedia.org/w/index.php?curid=92750450" />
          <img src="/taitong-image/台東-小火車.jpg" alt="由 JianEn Yu - https://www.flickr.com/photos/93179224@N04/14729078814/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129921752" />
          <img src="/taitong-image/台東-小野柳.jpg" alt="由 Hatsune0831 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=129911668" />
          <img src="taitong-image/花東 伯朗大道.jpg" alt="由 觀光局資訊室 - https://media.taiwan.net.tw/zh-tw/portal/media/details/22553, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=129650650" />
          <img src="taitong-image/嘉明湖.jpg" alt="由 CHU WayNe - https://www.flickr.com/photos/junes_hours/21186259080/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=129921943" />
        </Carousel>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map( item=>
            <Card
            className="max-w-sm"
            imgAlt={item.name}
            imgSrc={item.cover}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
              </Card>
          )}
        
          
        </div>
      </div>
      <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  </>
    );
  }