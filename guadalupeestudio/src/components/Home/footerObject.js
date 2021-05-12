import instagram from "../../assets/ICO-IG.svg";
import instagramHover from "../../assets/ICO-IG-hover.svg";
import facebook from "../../assets/ICO-FB.svg";
import facebookHover from "../../assets/ICO-FB-hover.svg";
import mail from "../../assets/ICO-Mail.svg";
import mailHover from "../../assets/ICO-Mail-hover.svg";

const object = [
	{
		img: {
			src: instagram,
			srcHover: instagramHover,
			className: "w-6",
		},
		a: {
			href: "https://www.instagram.com/guadalupe_estudio/",
			text: "@guadalupe_estudio",
			className: "link ml-3 mr-5 font-italic",
		},
	},
	{
		img: {
			src: facebook,
			srcHover: facebookHover,
			className: "w-6",
		},
		a: {
			href: "https://www.facebook.com/guadalupe.estudio",
			text: "@guadalupe.estudio",
			className: "link ml-3 mr-5 font-italic",
		},
	},
	{
		img: {
			src: mail,
			srcHover: mailHover,
			className: "w-6",
		},
		a: {
			href: "mailto:hola@guadalupestudio.cl",
			text: "hola@guadalupestudio.cl",
			className: "link ml-3 mr-5 font-italic",
		},
	},
];

export default object;
