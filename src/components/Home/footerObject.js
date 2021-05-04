import instagram from "../../assets/ICO-IG.svg";
import facebook from "../../assets/ICO-FB.svg";
import mail from "../../assets/ICO-Mail.svg";

const object = [
	{
		img: {
			key: 0,
			src: instagram,
			className: "w-10",
		},
		a: {
			key: 1,
			href: "",
			text: "@guadalupe_estudio",
			className: "link ml-3 mr-5 font-italic",
		},
	},
	{
		img: {
			key: 2,
			src: facebook,
			className: "w-10",
		},
		a: {
			key: 3,
			href: "",
			text: "@guadalupe.estudio",
			className: "link ml-3 mr-5 font-italic",
		},
	},
	{
		img: {
			key: 4,
			src: mail,
			className: "w-10",
		},
		a: {
			key: 5,
			href: "",
			text: "hola@guadalupeestudio.cl",
			className: "link ml-3 mr-5 font-italic",
		},
	},
];

export default object;
