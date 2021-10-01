import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes} from '@fortawesome/free-solid-svg-icons'



export default function Header() {


   if (typeof window !== `undefined`){
  
    window.onscroll = ()=> {
      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
    };
  }

  } 



      let show=()=>{
        document.querySelector('.mainMenu').style.display = 'flex';

        document.querySelector('.mainMenu').style.top = '0';

      }

      let close =()=>{

        document.querySelector('.mainMenu').style.top = '-150%';
      };

  return (
    <header id="header">
      <div id="Header-container">
          <div id="HeaderLogo">
              <Link to="#page-acceuill"  >
{/*                <StaticImage src="../images/logo.svg" alt="" /> 
 */}               <svg width="70" height="70" viewBox="0 0 379 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M102.435 139.149L163.03 239.723H272.679L187.557 119.861H102.435V139.149Z" fill="#007A7A"/>
                  <path d="M102.435 100.573L158.702 7.62939e-06H261.137L187.557 119.861H102.435V100.573Z" fill="#007A7A"/>
                  <path d="M377.192 81.0648V5.15268C377.192 3.79087 376.628 2.48442 375.622 1.5189C374.616 0.553373 373.251 0.00729766 371.825 1.52588e-05H291.262L285.78 5.26288V81.0648C285.78 82.4241 286.345 83.7277 287.352 84.6889C288.358 85.65 289.723 86.19 291.147 86.19H371.796C372.504 86.1936 373.205 86.0637 373.859 85.8078C374.514 85.5518 375.109 85.1749 375.61 84.6986C376.112 84.2224 376.509 83.6561 376.781 83.0325C377.052 82.4089 377.192 81.7402 377.192 81.0648Z" fill="white"/>
                  <path d="M91.5279 81.2026V5.15269C91.5203 3.81283 90.9576 2.53032 89.9627 1.58546C88.9678 0.640605 87.6218 0.110225 86.2186 0.110245H5.42475L0 5.26289V81.2026C0 82.5473 0.559377 83.8368 1.55507 84.7877C2.55076 85.7385 3.90119 86.2726 5.3093 86.2726H86.1032C86.8101 86.2873 87.5129 86.167 88.1705 85.9188C88.828 85.6706 89.427 85.2995 89.9323 84.8272C90.4376 84.3549 90.8391 83.7911 91.1131 83.1686C91.3871 82.5462 91.5281 81.8778 91.5279 81.2026Z" fill="white"/>
                  <path d="M5.33819 100.077C3.9274 100.077 2.57397 100.611 1.57369 101.561C0.573416 102.511 0.00762586 103.8 0 105.147V235.81C0 236.829 0.14428 237.821 0.230845 238.979C3.89543 238.979 7.24261 238.979 10.5609 238.979H86.0744C86.774 238.982 87.4675 238.854 88.115 238.601C88.7625 238.348 89.3512 237.975 89.8473 237.504C90.3433 237.032 90.737 236.472 91.0056 235.855C91.2742 235.238 91.4126 234.577 91.4125 233.909V105.092C91.4049 103.745 90.8391 102.456 89.8389 101.506C88.8386 100.556 87.4851 100.022 86.0744 100.022L5.33819 100.077Z" fill="white"/>
                  <path d="M286.011 238.841H287.136L376.269 153.753C376.843 153.183 377.164 152.423 377.163 151.632V102.998C377.167 102.609 377.09 102.222 376.937 101.861C376.783 101.5 376.557 101.172 376.269 100.896C375.982 100.619 375.641 100.399 375.264 100.249C374.888 100.099 374.484 100.022 374.076 100.022H288.896C288.07 100.022 287.277 100.336 286.693 100.894C286.108 101.452 285.78 102.209 285.78 102.998V235.672C285.78 236.692 285.924 237.684 286.011 238.841Z" fill="white"/>
                  <path d="M5.7325 299V264.688H18.2716V299H5.7325ZM36.4712 299V264.688H48.565V279.313L56.3931 264.688H70.3619L60.0025 281.586L71.815 299H56.8853L48.565 284.656V299H36.4712ZM84.9287 299V264.688H97.4678V299H84.9287ZM112.55 296.07L116.488 286.461C118.253 287.695 119.824 288.602 121.199 289.18C122.589 289.742 123.886 290.023 125.089 290.023C125.933 290.023 126.597 289.867 127.082 289.555C127.566 289.227 127.808 288.789 127.808 288.242C127.808 287.289 126.597 286.563 124.175 286.063C123.394 285.891 122.785 285.758 122.347 285.664C119.785 285.039 117.824 283.93 116.464 282.336C115.105 280.742 114.425 278.758 114.425 276.383C114.425 272.695 115.746 269.695 118.386 267.383C121.027 265.07 124.488 263.914 128.769 263.914C130.738 263.914 132.675 264.172 134.582 264.688C136.488 265.203 138.41 265.984 140.347 267.031L136.597 276.008C135.41 275.133 134.214 274.469 133.011 274.016C131.824 273.547 130.667 273.313 129.542 273.313C128.683 273.313 128.019 273.461 127.55 273.758C127.082 274.039 126.847 274.438 126.847 274.953C126.847 275.922 128.558 276.773 131.98 277.508C132.527 277.633 132.949 277.727 133.246 277.789C135.605 278.32 137.464 279.406 138.824 281.047C140.183 282.688 140.863 284.672 140.863 287C140.863 290.797 139.488 293.898 136.738 296.305C134.003 298.711 130.441 299.914 126.05 299.914C123.8 299.914 121.55 299.594 119.3 298.953C117.05 298.313 114.8 297.352 112.55 296.07ZM184.562 301.883L182.078 297.945C180.672 298.57 179.273 299.039 177.883 299.352C176.492 299.664 175.086 299.82 173.664 299.82C171.07 299.82 168.656 299.391 166.422 298.531C164.203 297.656 162.234 296.375 160.516 294.688C158.812 293.031 157.523 291.117 156.648 288.945C155.773 286.773 155.336 284.414 155.336 281.867C155.336 279.305 155.773 276.93 156.648 274.742C157.539 272.555 158.828 270.641 160.516 269C162.203 267.328 164.164 266.063 166.398 265.203C168.633 264.344 171.055 263.914 173.664 263.914C176.258 263.914 178.672 264.352 180.906 265.227C183.156 266.102 185.133 267.375 186.836 269.047C188.523 270.719 189.805 272.641 190.68 274.813C191.57 276.984 192.016 279.336 192.016 281.867C192.016 283.773 191.773 285.547 191.289 287.188C190.82 288.813 190.102 290.352 189.133 291.805L194.312 297.57L184.562 301.883ZM171.508 285.078L179.266 283.555C179.328 283.273 179.367 282.992 179.383 282.711C179.414 282.43 179.43 282.148 179.43 281.867C179.43 279.883 178.898 278.297 177.836 277.109C176.789 275.922 175.398 275.328 173.664 275.328C171.93 275.328 170.531 275.93 169.469 277.133C168.406 278.336 167.875 279.914 167.875 281.867C167.875 283.82 168.391 285.375 169.422 286.531C170.469 287.672 171.883 288.242 173.664 288.242H174.297L171.508 285.078ZM208.364 283.297V264.688H220.692V283.391C220.692 285.563 220.95 287.063 221.465 287.891C221.981 288.703 222.864 289.109 224.114 289.109C225.348 289.109 226.231 288.688 226.762 287.844C227.293 287 227.559 285.516 227.559 283.391V264.688H239.887V283.297C239.887 285.734 239.723 287.742 239.395 289.32C239.083 290.898 238.575 292.219 237.872 293.281C236.497 295.422 234.622 297.063 232.247 298.203C229.872 299.344 227.161 299.914 224.114 299.914C221.051 299.914 218.333 299.344 215.958 298.203C213.583 297.063 211.708 295.422 210.333 293.281C209.645 292.234 209.145 290.93 208.833 289.367C208.52 287.805 208.364 285.781 208.364 283.297ZM268.774 286.531H273.907L272.852 282.641C272.337 280.672 271.985 279.156 271.798 278.094C271.61 277.031 271.493 276.031 271.446 275.094H271.235C271.188 276.031 271.071 277.031 270.884 278.094C270.696 279.156 270.345 280.672 269.829 282.641L268.774 286.531ZM252.415 299L264.649 264.688H278.384L290.384 299H277.118L276.017 294.688H266.712L265.657 299H252.415ZM315.919 273.523V280.227H317.841C319.013 280.227 319.912 279.945 320.537 279.383C321.177 278.805 321.497 277.984 321.497 276.922C321.497 275.828 321.177 274.992 320.537 274.414C319.912 273.82 319.013 273.523 317.841 273.523H315.919ZM303.826 299V264.688H319.341C323.841 264.688 327.279 265.68 329.654 267.664C332.029 269.648 333.216 272.508 333.216 276.242C333.216 278.68 332.615 280.688 331.412 282.266C330.224 283.844 328.615 284.766 326.583 285.031L335.747 299H321.919L315.919 287.68V299H303.826ZM349.705 299V264.688H372.65V273.992H361.799V277.297H371.643V286.086H361.799V289.695H372.932V299H349.705Z" fill="white"/>
                  <path d="M21.6756 319.211C21.6473 319.891 21.4915 320.868 21.2083 322.143C21.1611 322.35 21.1234 322.516 21.0951 322.638L19.5374 329.704H13.0379L6.97739 308.974H14.4539L16.0824 318.107C16.224 318.909 16.3325 319.646 16.4081 320.316C16.4836 320.977 16.5308 321.6 16.5497 322.185H16.7196C16.7385 321.364 16.8848 320.283 17.1585 318.942C17.1774 318.82 17.1963 318.721 17.2152 318.645L19.1834 308.974H24.4369L26.4051 318.659C26.4146 318.716 26.4334 318.81 26.4618 318.942C26.7355 320.292 26.8818 321.373 26.9007 322.185H27.0706C27.0895 321.6 27.1367 320.977 27.2122 320.316C27.2878 319.646 27.3963 318.909 27.5379 318.107L29.1664 308.974H36.6429L30.5824 329.704H24.0829L22.5252 322.638C22.4969 322.516 22.4592 322.346 22.412 322.128C22.1288 320.864 21.973 319.891 21.9447 319.211H21.6756ZM56.2015 329.704V308.974H70.0643V314.595H63.5081V316.592H69.4554V321.902H63.5081V324.083H70.2342V329.704H56.2015ZM98.5154 321.265V324.578H99.7615C100.507 324.578 101.078 324.437 101.475 324.153C101.881 323.861 102.084 323.45 102.084 322.921C102.084 322.383 101.881 321.973 101.475 321.69C101.078 321.406 100.507 321.265 99.7615 321.265H98.5154ZM98.5154 313.901V316.804H99.4925C100.097 316.804 100.554 316.682 100.866 316.436C101.187 316.181 101.347 315.818 101.347 315.346C101.347 314.874 101.187 314.515 100.866 314.27C100.554 314.024 100.097 313.901 99.4925 313.901H98.5154ZM91.5203 329.704V308.974H101.447C103.571 308.974 105.227 309.474 106.417 310.475C107.606 311.466 108.201 312.849 108.201 314.624C108.201 315.756 107.918 316.7 107.351 317.456C106.794 318.201 106.001 318.688 104.972 318.914C106.379 319.207 107.427 319.759 108.116 320.571C108.805 321.383 109.15 322.473 109.15 323.842C109.15 325.777 108.494 327.24 107.181 328.232C105.879 329.213 103.958 329.704 101.418 329.704H91.5203ZM165.443 322.171H168.544L167.907 319.82C167.595 318.631 167.383 317.715 167.27 317.073C167.157 316.431 167.086 315.827 167.057 315.261H166.93C166.902 315.827 166.831 316.431 166.718 317.073C166.604 317.715 166.392 318.631 166.08 319.82L165.443 322.171ZM155.559 329.704L162.951 308.974H171.249L178.499 329.704H170.484L169.819 327.099H164.197L163.56 329.704H155.559ZM210.617 322.284H207.375V317.413H218.83C218.849 317.838 218.863 318.154 218.873 318.362C218.882 318.57 218.887 318.754 218.887 318.914C218.887 320.104 218.774 321.189 218.547 322.171C218.321 323.153 217.99 324.021 217.556 324.776C216.499 326.551 215.135 327.911 213.464 328.855C211.793 329.789 209.895 330.256 207.771 330.256C206.204 330.256 204.746 329.997 203.396 329.478C202.055 328.949 200.866 328.175 199.827 327.155C198.798 326.136 198.02 324.97 197.491 323.658C196.962 322.346 196.698 320.92 196.698 319.381C196.698 317.833 196.962 316.403 197.491 315.091C198.029 313.769 198.808 312.608 199.827 311.607C200.856 310.597 202.046 309.828 203.396 309.299C204.746 308.771 206.204 308.506 207.771 308.506C209.895 308.506 211.783 308.974 213.435 309.908C215.087 310.833 216.437 312.193 217.485 313.986L210.844 316.45C210.495 315.874 210.075 315.445 209.584 315.162C209.093 314.878 208.531 314.737 207.899 314.737C206.794 314.737 205.912 315.157 205.251 315.997C204.599 316.837 204.274 317.965 204.274 319.381C204.274 320.845 204.604 321.982 205.265 322.794C205.926 323.596 206.86 323.998 208.069 323.998C208.786 323.998 209.367 323.847 209.81 323.544C210.263 323.242 210.532 322.822 210.617 322.284ZM239.876 329.704V308.974H253.738V314.595H247.182V316.592H253.13V321.902H247.182V324.083H253.908V329.704H239.876ZM275.195 329.704V308.974H282.501L288.944 319.82C288.859 319.339 288.798 318.806 288.76 318.22C288.732 317.635 288.717 316.87 288.717 315.926V308.974H295.897V329.704H288.533L282.161 318.942C282.237 319.405 282.294 319.905 282.331 320.443C282.369 320.972 282.388 321.567 282.388 322.228V329.704H275.195ZM333.24 317.201C332.561 316.549 331.867 316.063 331.159 315.742C330.451 315.421 329.705 315.261 328.922 315.261C327.704 315.261 326.722 315.638 325.976 316.394C325.24 317.139 324.872 318.135 324.872 319.381C324.872 320.599 325.226 321.572 325.934 322.298C326.642 323.025 327.591 323.389 328.78 323.389C329.497 323.389 330.224 323.238 330.961 322.936C331.706 322.624 332.518 322.133 333.396 321.463L333.155 329.265C332.344 329.596 331.532 329.841 330.72 330.002C329.908 330.171 329.096 330.256 328.284 330.256C327.274 330.256 326.302 330.143 325.367 329.917C324.433 329.69 323.588 329.369 322.833 328.954C321.001 327.896 319.614 326.561 318.67 324.946C317.735 323.332 317.268 321.477 317.268 319.381C317.268 317.833 317.532 316.398 318.061 315.077C318.599 313.755 319.378 312.589 320.397 311.579C321.426 310.56 322.616 309.79 323.966 309.271C325.325 308.742 326.793 308.478 328.369 308.478C329.209 308.478 330.036 308.568 330.847 308.747C331.669 308.917 332.466 309.177 333.24 309.526V317.201ZM358.18 329.704V320.543L351.241 308.974H359.737L361.479 312.995C361.64 313.344 361.828 313.868 362.046 314.567L362.088 314.709C362.192 314.378 362.371 313.892 362.626 313.25C362.673 313.137 362.706 313.057 362.725 313.009L364.439 308.974H372.878L365.685 320.543V329.704H358.18Z" fill="white"/>
                </svg>  
             </Link> 

          </div>
          <FontAwesomeIcon icon={faBars} onClick={show}  className="openMenu" size="3x" />
          <nav id="HeaderNavLinks" className="mainMenu">
                  <FontAwesomeIcon icon={faTimes} onClick={close}  className="closeMenu" size="3x" />  
                  <Link to="/blog" className="navLinks" onClick={close} >Blog</Link>
                  <Link to="/#page-acceuill" className="navLinks" onClick={close} >Acceuil</Link>
                  <Link to="/#apropos-page" className="navLinks" onClick={close}><p>A propos</p> </Link>
                  <Link to="/#services-page" className="navLinks" onClick={close}>Services</Link>
                  <Link to="/#contact-page" className="navLinks" onClick={close} id="contact-button">Contact</Link>

          </nav>
      </div>

</header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

