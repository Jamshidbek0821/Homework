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
            class="absolute left-0 bottom-[-10px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">About
             <span
            class="absolute left-0 bottom-[-10px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">Contacts
             <span
            class="absolute left-0 bottom-[-10px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">Blogs
             <span
            class="absolute left-0 bottom-[-10px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
            <a class="text-[14px] text-[#9597A5] hover:text-[#2d314d] duration-300 relative group" href="/">Careers
             <span
            class="absolute left-0 bottom-[-10px] w-full h-[3px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 line"></span></a>
        </nav>
        <button class="py-[8px] px-[35px] leading-[28px] text-white text-[14px] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)] rounded-[22px]">Request Invite</button>
    </div>
`;

let elMain = document.createElement("main");
let elHeroSection = document.createElement("section");
document.body.appendChild(elMain);
elMain.appendChild(elHeroSection);
elHeroSection.className = "flex gap-[28px] items-center";

elHeroSection.innerHTML = `
       <div  >
            <div class=" pt-[170px] w-[447px]">
                <h2 class="font-thin text-[56px] leading-[64px] text-[#2D314D]">Next generation
                    digital banking</h2>
                <p class="font-normal text-[18px] leading-[28px] text-[#9597A5] mt-[24px]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
                    budgeting, investing, and much more.</p>
                <button type="submit" class="mt-[34px] py-[8px] px-[35px] leading-[28px] rounded-[22px] text-[#FFFFFF] bg-[linear-gradient(135deg,rgba(51,211,94,1)_0%,rgba(42,182,217,1)_99.58%)]">Request Invite</button>
            </div>
        </div>

`;