import instagram from "../../assets/ICO-IG.svg";
import instagramHover from "../../assets/ICO-IG-hover.svg";
import facebook from "../../assets/ICO-FB.svg";
import facebookHover from "../../assets/ICO-FB-hover.svg";
import mail from "../../assets/ICO-Mail.svg";
import mailHover from "../../assets/ICO-Mail-hover.svg";

const object = [
	{
		col: {
			className: "mt-sm-5 text-lg-right",
			xl: 4,
		},
		img: {
			src: instagram,
			srcHover: instagramHover,
			className: "w-lg-10 w-sm-7 w-md-6",
		},
		a: {
			href: "https://www.instagram.com/guadalupe_estudio/",
			text: "@guadalupe_estudio",
			className: "link ml-3 mr-5 font-italic",
		},
	},
	{
		col: {
			className: "mt-sm-5",
			xl: 4,
		},
		img: {
			src: facebook,
			srcHover: facebookHover,
			className: "w-lg-10 w-sm-7 w-md-6",
		},
		a: {
			href: "https://www.facebook.com/guadalupe.estudio",
			text: "@guadalupe.estudio",
			className: "link ml-3 mr-5 font-italic",
		},
	},
	{
		col: {
			className: "mt-sm-5 text-lg-left",
			xl: 4,
		},
		img: {
			src: mail,
			srcHover: mailHover,
			className: "w-lg-10 w-sm-7 w-md-6",
		},
		a: {
			href: "mailto:hola@guadalupestudio.cl",
			text: "hola@guadalupestudio.cl",
			className: "link ml-3 mr-5 font-italic",
		},
	},
];

export default object;
