let elHeader = document.createElement("header");
document.body.appendChild(elHeader);
elHeader.className = "py-[18px] bg-[#FFFFFF]";

elHeader.innerHTML = `
    <div class="containers flex items-center justify-between">
        <a href="/">
            <img src="./images/logo.svg" alt="Logo" width="139" height="20"/>
        </a>
        <nav class="flex items-center gap-[30px]">
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">Home
             <span
            class="absolute left-0 bottom-[-30px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">About
             <span
            class="absolute left-0 bottom-[-30px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">Contacts
             <span
            class="absolute left-0 bottom-[-30px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">Blogs
             <span
            class="absolute left-0 bottom-[-30px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">Careers
             <span
            class="absolute left-0 bottom-[-30px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
        </nav>
        <button class="py-[8px] px-[35px] leading-[28px] text-white text-[14px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] rounded-[22px]">Request Invite</button>
    </div>
`

let elMain = document.createElement("main")
let elHeroSection = document.createElement("section")
document.body.appendChild(elMain)
elMain.appendChild(elHeroSection)
elHeroSection.className = "flex items-center bg-[#F4F5F7] pt-[170px] pb-[170px] bg-imgg"

elHeroSection.innerHTML = `
    <div class=" containers">
        <h2 class="font-thin text-[56px] w-[447px] text-[#2D314D] leading-[64px] pb-[20px]  cursor-pointer">Next generation digital
          banking</h2>
        <p class="font-normal  text-[18px] w-[447px] text-[#9597A5] leading-[28px] pb-[36px] cursor-pointer">Take your financial life online. Your
          Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
               <button class="py-[8px] px-[35px] leading-[28px] text-white text-[14px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] rounded-[22px]">Request Invite</button>
      </div>

`
let elSection = document.createElement("section")
document.body.appendChild(elMain)
elMain.appendChild(elSection)
elSection.className = "bg-[#F4F5F7] py-[95px] -mt-[111px] z-0 relative"

elSection.innerHTML = `
    <div class="containers">
        <h2 class="font-thin text-[40px] text-[#2D314D] leading-[64px]  cursor-pointer">Why choose Easybank?</h2>
        <p class="font-normal text-[18px] text-[#9597A5] pt-[16px] leading-[28px] w-[635px]  cursor-pointer">We leverage Open Banking to
          turn your bank account into your financial hub. Control your finances like never before.</p>

        <div class="pt-[72px] flex justify-between">
          <div class="w-[240px]">
            <img src="./images/img-4.svg" alt="bank img" width="72" height="72">
            <h3 class="font-thin text-[24px] text-[#2D314D] pt-[40px] leading-[28px]  cursor-pointer">Online Banking</h3>
            <p class="font-normal text-[16px] text-[#9597A5] leading-[26px] pt-[26px]  cursor-pointer">Our modern web and mobile
              applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div class="w-[240px]">
            <img src="./images/img-3.svg" alt="bank img" width="72" height="72">
            <h3 class="font-thin text-[24px] text-[#2D314D] pt-[40px] leading-[28px]  cursor-pointer">Simple Budgeting</h3>
            <p class="font-normal text-[16px] text-[#9597A5] leading-[26px] pt-[26px]  cursor-pointer">See exactly where your money goes
              each month. Receive notifications when you’re close to hitting your limits.</p>
          </div>
          <div class="w-[250px]">
            <img src="./images/img-2.svg" alt="bank img" width="72" height="72">
            <h3 class="font-thin text-[24px] text-[#2D314D] pt-[40px] leading-[28px]  cursor-pointer">Fast Onboarding</h3>
            <p class="font-normal text-[16px] text-[#9597A5] leading-[26px] pt-[26px]  cursor-pointer">We don’t do branches. Open your
              account in minutes online and start taking control of your finances right away.</p>
          </div>
          <div class="w-[260px]">
            <img src="./images/img-1.svg" alt="bank img" width="72" height="72">
            <h3 class="font-thin text-[24px] text-[#2D314D] pt-[40px] leading-[28px]  cursor-pointer">Open API</h3>
            <p class="font-normal text-[16px] text-[#9597A5] leading-[26px] pt-[26px]  cursor-pointer">Manage your savings, investments,
              pension, and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div>
`

let elSectionLastet = document.createElement("section")
document.body.appendChild(elMain)
elMain.appendChild(elSectionLastet)
elSectionLastet.className = "py-[80px] bg-[#F4F5F7]"

elSectionLastet.innerHTML = `
  <div class="containers">
        <h2 class="font-thin text-[40px] text-[#2D314D]  cursor-pointer">Latest Articles</h2>
        <div class="pt-[40px] flex justify-between">
          <div class="w-[255px] bg-[#FFFFFF]">
            <img src="./images/image-1.png" alt="money img" width="255" height="200">
            <p class="pt-[24px] pl-[24px] font-normal text-[#9597A5] text-[10px] leading-[18px]  cursor-pointer">By Claire Robinson</p>
            <h3 class="pt-[8px] pl-[24px] font-thin text-[16px] text-[#2D314D] w-[207px]  cursor-pointer">Receive money in any currency with no fees</h3>
            <p class="pt-[8px] pl-[24px] font-normal text-[13px] text-[#9597A5] leading-[18px] pb-[24px] w-[222px]  cursor-pointer">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
          </div>
          <div class="w-[255px] bg-[#FFFFFF]">
            <img src="./images/image-2.png" alt="food img" width="255" height="200">
            <p class="pt-[24px] pl-[24px] font-normal text-[#9597A5] text-[10px] leading-[18px]  cursor-pointer">By Wilson Hutton</p>
            <h3 class="pt-[8px] pl-[24px] font-thin text-[16px] text-[#2D314D] w-[207px]  cursor-pointer">Treat yourself without worrying about money</h3>
            <p class="pt-[8px] pl-[24px] font-normal text-[13px] text-[#9597A5] leading-[18px] pb-[24px] w-[222px]  cursor-pointer">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
          </div>
          <div class="w-[255px] bg-[#FFFFFF]">
            <img src="./images/image-3.png" alt="travell img" width="255" height="200">
            <p class="pt-[24px] pl-[24px] font-normal text-[#9597A5] text-[10px] leading-[18px]  cursor-pointer">By Wilson Hutton</p>
            <h3 class="pt-[8px] pl-[24px] font-thin text-[16px] text-[#2D314D] w-[207px]  cursor-pointer">Take your Easybank card wherever you go</h3>
            <p class="pt-[8px] pl-[24px] font-normal text-[13px] text-[#9597A5] leading-[18px] pb-[24px] w-[222px]  cursor-pointer">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
          </div>
          <div class="w-[255px] bg-[#FFFFFF]">
            <img src="./images/image-4.png" alt="life img" width="255" height="200">
            <p class="pt-[24px] pl-[24px] font-normal text-[#9597A5] text-[10px] leading-[18px]  cursor-pointer">By Claire Robinson</p>
            <h3 class="pt-[8px] pl-[24px] font-thin text-[16px] text-[#2D314D] w-[207px]  cursor-pointer">Our invite-only Beta accounts are now live!</h3>
            <p class="pt-[8px] pl-[24px] font-normal text-[13px] text-[#9597A5] leading-[18px] pb-[24px] w-[222px]  cursor-pointer">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
          </div>
        </div>
      </div>
`

let elFooter = document.createElement("footer")
document.body.appendChild(elFooter)
elFooter.className = "bg-[#2D314D] pt-[48px]  pb-[48px]"

elFooter.innerHTML = `
  <div class="containers flex justify-between">
      <div>
        <a href="/">
            <img src="./images/logo-white.svg" alt="Logo" width="139" height="20"/>
        </a>
      <div class="flex gap-[13px] pt-[55px] text-[#FFFFFF] items-center ">
        <a class="" href="https://www.facebook.com" target="_blank">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="facebook"
              d="M18.8958 0H1.10417C0.494167 0 0 0.494167 0 1.10417V18.8967C0 19.5058 0.494167 20 1.10417 20H10.6833V12.255H8.07667V9.23667H10.6833V7.01083C10.6833 4.4275 12.2608 3.02083 14.5658 3.02083C15.67 3.02083 16.6183 3.10333 16.895 3.14V5.84L15.2967 5.84083C14.0433 5.84083 13.8008 6.43667 13.8008 7.31V9.2375H16.79L16.4008 12.2558H13.8008V20H18.8975C19.5058 20 20 19.5058 20 18.8958V1.10417C20 0.494167 19.5058 0 18.8958 0Z"
              fill="currentColor" />
          </svg>
        </a>

        <a class="" href="https://www.youtube.com" target="_blank">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="youtube" fill-rule="evenodd" clip-rule="evenodd"
              d="M10.3333 0C4.81081 0 0.333313 4.4775 0.333313 10C0.333313 15.5225 4.81081 20 10.3333 20C15.8558 20 20.3333 15.5225 20.3333 10C20.3333 4.4775 15.8558 0 10.3333 0ZM14.0341 14.0767C12.2825 14.1967 8.38081 14.1967 6.63165 14.0767C4.73498 13.9467 4.51415 13.0183 4.49998 10C4.51415 6.97583 4.73748 6.05333 6.63165 5.92333C8.38081 5.80333 12.2833 5.80333 14.0341 5.92333C15.9316 6.05333 16.1516 6.98167 16.1666 10C16.1516 13.0242 15.9291 13.9467 14.0341 14.0767ZM12.7641 9.99667L8.66665 8.04833V11.9517L12.7641 9.99667Z"
              fill="currentColor" />
          </svg>

        </a>

        <a class="" href="https://www.twitter.com" target="_blank">
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="twitter"
              d="M20.6667 2.79746C19.9309 3.12412 19.14 3.34412 18.31 3.44329C19.1575 2.93579 19.8084 2.13162 20.1142 1.17329C19.3217 1.64329 18.4434 1.98496 17.5084 2.16912C16.7609 1.37162 15.6934 0.873291 14.5134 0.873291C11.8642 0.873291 9.91752 3.34496 10.5159 5.91079C7.10669 5.73996 4.08335 4.10662 2.05919 1.62412C0.984187 3.46829 1.50169 5.88079 3.32835 7.10246C2.65669 7.08079 2.02335 6.89662 1.47085 6.58912C1.42585 8.48996 2.78835 10.2683 4.76169 10.6641C4.18419 10.8208 3.55169 10.8575 2.90835 10.7341C3.43002 12.3641 4.94502 13.55 6.74169 13.5833C5.01669 14.9358 2.84335 15.54 0.666687 15.2833C2.48252 16.4475 4.64002 17.1266 6.95669 17.1266C14.575 17.1266 18.8792 10.6925 18.6192 4.92162C19.4209 4.34246 20.1167 3.61996 20.6667 2.79746Z"
              fill="currentColor" />
          </svg>
        </a>

        <a class="" href="https://www.pinterest.com" target="_blank">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="pinterest"
              d="M10 0C4.4775 0 0 4.47667 0 10C0 14.2367 2.63583 17.855 6.35583 19.3117C6.26833 18.5208 6.18917 17.3075 6.39083 16.4442C6.5725 15.6633 7.56333 11.4733 7.56333 11.4733C7.56333 11.4733 7.26417 10.8742 7.26417 9.98833C7.26417 8.59833 8.07 7.56 9.07333 7.56C9.92583 7.56 10.3383 8.20083 10.3383 8.96833C10.3383 9.82583 9.7925 11.1083 9.51 12.2975C9.27417 13.2925 10.0092 14.105 10.9908 14.105C12.7683 14.105 14.1342 12.2308 14.1342 9.52583C14.1342 7.13167 12.4142 5.4575 9.9575 5.4575C7.1125 5.4575 5.4425 7.59167 5.4425 9.79667C5.4425 10.6558 5.77333 11.5783 6.18667 12.0783C6.26833 12.1775 6.28 12.265 6.25583 12.3658L5.97833 13.4992C5.93417 13.6825 5.83333 13.7217 5.64333 13.6333C4.39417 13.0517 3.61333 11.2258 3.61333 9.75917C3.61333 6.605 5.905 3.7075 10.2208 3.7075C13.69 3.7075 16.3858 6.18 16.3858 9.48333C16.3858 12.93 14.2133 15.7033 11.1967 15.7033C10.1833 15.7033 9.23083 15.1775 8.905 14.555L8.28167 16.9325C8.05583 17.8017 7.44667 18.8908 7.03833 19.5542C7.975 19.8433 8.96917 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47667 15.5225 0 10 0Z"
              fill="currentColor" />
          </svg>
        </a>

        <a class="" href="https://www.instagram.com" target="_blank">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="instagram" fill-rule="evenodd" clip-rule="evenodd"
              d="M10.3334 0C7.61754 0 7.27754 0.0116667 6.21087 0.06C2.57921 0.226667 0.560874 2.24167 0.394207 5.87667C0.345041 6.94417 0.333374 7.28417 0.333374 10C0.333374 12.7158 0.345041 13.0567 0.393374 14.1233C0.560041 17.755 2.57504 19.7733 6.21004 19.94C7.27754 19.9883 7.61754 20 10.3334 20C13.0492 20 13.39 19.9883 14.4567 19.94C18.085 19.7733 20.1084 17.7583 20.2725 14.1233C20.3217 13.0567 20.3334 12.7158 20.3334 10C20.3334 7.28417 20.3217 6.94417 20.2734 5.8775C20.11 2.24917 18.0925 0.2275 14.4575 0.0608333C13.39 0.0116667 13.0492 0 10.3334 0ZM10.3334 1.8025C13.0034 1.8025 13.32 1.8125 14.375 1.86083C17.085 1.98417 18.3509 3.27 18.4742 5.96C18.5225 7.01417 18.5317 7.33083 18.5317 10.0008C18.5317 12.6717 18.5217 12.9875 18.4742 14.0417C18.35 16.7292 17.0875 18.0175 14.375 18.1408C13.32 18.1892 13.005 18.1992 10.3334 18.1992C7.66337 18.1992 7.34671 18.1892 6.29254 18.1408C3.57587 18.0167 2.31671 16.725 2.19337 14.0408C2.14504 12.9867 2.13504 12.6708 2.13504 10C2.13504 7.33 2.14587 7.01417 2.19337 5.95917C2.31754 3.27 3.58004 1.98333 6.29254 1.86C7.34754 1.8125 7.66337 1.8025 10.3334 1.8025ZM5.19837 10C5.19837 7.16417 7.49754 4.865 10.3334 4.865C13.1692 4.865 15.4684 7.16417 15.4684 10C15.4684 12.8367 13.1692 15.1358 10.3334 15.1358C7.49754 15.1358 5.19837 12.8358 5.19837 10ZM10.3334 13.3333C8.49254 13.3333 7.00004 11.8417 7.00004 10C7.00004 8.15917 8.49254 6.66667 10.3334 6.66667C12.1742 6.66667 13.6667 8.15917 13.6667 10C13.6667 11.8417 12.1742 13.3333 10.3334 13.3333ZM14.4709 4.6625C14.4709 4 15.0084 3.4625 15.6717 3.4625C16.3342 3.4625 16.8709 4 16.8709 4.6625C16.8709 5.325 16.3342 5.8625 15.6717 5.8625C15.0084 5.8625 14.4709 5.325 14.4709 4.6625Z"
              fill="currentColor" />
          </svg>
        </a>

      </div>
      </div>

      <div class="flex gap-[30px]">
        <div class="flex flex-col gap-[8px] w-[160px]">
          <a class="font-normal text-[15px] text-[#FFFFFF] leading-[26px] hover:text-[#30C88F] duration-300 relative group" href="#">About Us</a>
          <a class="font-normal text-[15px] text-[#FFFFFF] leading-[26px] hover:text-[#30C88F] duration-300 relative group" href="#">Contact</a>
          <a class="font-normal text-[15px] text-[#FFFFFF] leading-[26px] hover:text-[#30C88F] duration-300 relative group" href="#">Blog</a>
        </div>
        <div class="flex flex-col gap-[8px] w-[160px]">
          <a class="font-normal text-[15px] text-[#FFFFFF] leading-[26px] hover:text-[#30C88F] duration-300 relative group" href="#">Careers</a>
          <a class="font-normal text-[15px] text-[#FFFFFF] leading-[26px] hover:text-[#30C88F] duration-300 relative group" href="#">Support</a>
          <a class="font-normal text-[15px] text-[#FFFFFF] leading-[26px] hover:text-[#30C88F] duration-300 relative group" href="#">Privacy Policy</a>
        </div>
      </div>

      <div class="flex flex-col gap-[24px] items-end">
              <button class="py-[8px] px-[35px] leading-[28px] text-white text-[14px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] rounded-[22px]">Request Invite</button>
        <a class="font-normal text-[15px] text-[#FFFFFF] leading-[26px] " href="/">© Easybank. All Rights Reserved</a>
      </div>
    </div>
`