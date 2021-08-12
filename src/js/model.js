import image from "../../imgs/blog/blog_1/img_1.webp";
import cvProfilePicture from "../../imgs/cv/profile.png";
import { AJAX } from "./helpers.js";
import { GITHUB_REPO_URL, GITHUB_USER_URL } from "./config.js";

export const state = {
  github: {},
  cv: {
    profilePicture: cvProfilePicture,
  },
  blogs: {
    blog_1: {
      text: [
        `Lviv? Lvov? Lwow? Which is it, and why does it have so many names?`,

        `Well much like everywhere on the western Ukrainian border, the answer of course has everything to do with it's constant shift of ruler. Originally, or so the story goes, the city was settled by Lev, which also just happens to be the word for lion in Ukrainian, Russian and Polish. And so it seems to naturally follow that the emblem of Lviv is born. The change of name is very much just a change of pronunciation in the seperate languages that I mentioned. A common trend that differs Ukrainian and Russian is a switch from an 'i' sound (think ee as in free), to an 'o' sound. So it's quite clear how we get from Lviv to Lvov. But what about Lwow? Well this is of course the Polish name, and 'w' in Polish sounds like 'v' in English. And so there we have it. The reasoning comes from the fact that Lviv spent a good long while as part of the Polish-Lithuanian commonwealth (and later the Polish commonwealth) until the late 18th century when Poland was partitioned between Russia, Prussia, and Austria. Lviv ended up in Austrian hands and remained so until the collapse of the empire in 1918. For a shortlived time, Lviv became the capital of the newly formed Ukrainian People's Republic. This however deeply upset the Polish population (the majority at the time) and so the newly independent Poland came to their aid and once again claimed the city as Lwow. During this time, shows of Ukrainian culture were surpressed until 1939 when Lviv was transferred into soviet control (at this time the Ukrainian Soviet Socialist Republic) due to a secret agreement between the USSR and Nazi Germany which essentially tricked Estonia, Latvia, Lithuania and Poland into handing over their land to either the USSR or Germany. Once WW2 came to a close, this part of the world was part of the USSR, which due to an ongoing russification programme, meant that the city was officially Lvov. Finally, in 1991, Ukraine gained it's independence and a switch to Ukrainian swept across the country, most certainly so in the west. And so we arrive in modern day Lviv.`,

        `Anyway, enough of the history lessons, what is it like as a city? Well, put simply, it's a fantastic cultural melting-pot. Ukrainians go on city breaks to Lviv because it has everything you might imagine of any historically important city. There is a large main square and beautiful cobbled streets, just as you'd expect in any central european location. Lviv is all about the coffee, pastries, and al fresco dining, but don't think that means there's nothing here for those looking for something a little more lively.`,

        `While Lviv Coffee Manufacture comes highly recommended for a coffee literally too hot to handle (at least for the first minute or so, think Tiki bar fire cocktails mixed with coffee shop), the pubs and bars in Lviv are very much worth a visit.`,

        `The one I would recommend as an absolutely must see is Kryїvka. The experience starts at the entrance, which is hardly noticeable, being set back from the main square. You must go through the inconspicuous doorway and to the end where a staircase leads off to the right. Don't go up here, knock on the door right in front of you. A little hatch will open and they will ask you for the password (пароль? (parol?)). The words are those that are important to any Ukrainian patriot - слава Україні! (slava ukraїna), to which they will respond the obligatory - героям слава (heroyam slava). Once you are in, they will give you a shot to drink as a company before you go downstairs into an old bunker area. The food and the drinks are all Ukrainian staples, think varenyky (filled dumplings, but sadly not the fat bulky ones found in central Ukraine, these ones resemble Polish Pierogi), borshch, salo and potatoes served with hearty beers and a variety of horilkas.`,

        `Once you're filled to the brim with Ukrainian culture, there are plenty of spots to whet your appetite with a more multicultural selection. On Lesi Ukrainky Street alone there is an easygoing Limoncello bar, a more sophisticated Port/wine cafe, and a small place on the corner with Drukarska Street that goes for a French vibe, serving snails in your choice of sauce and blackberry wine to drink.`,

        `Once night decends, there is a bar called Pravda which declares itself a 'beer theatre'. The ground floor has beer bottles from floor to ceiling (no word of a lie) to buy and takeaway, the first and second floors lend themselves to the title beer theatre, with large open spaces filled with tables and on the side facing the square, large windows looking out over this fantastic sight. Also on the list should be the drunken cherry bar. While they are all across Ukraine now, the original comes from Lviv, and it just feels right to be drinking such a drink on small cobbled streets.`,

        `Aside from the gastronomical delights that will take up a sizeable part of your stay, there are of course some spots to do a bit of sightseeing. The general meandering in the centre is great on it's own, but there is also a viewing point that takes about 20 minutes to walk up to that has a spectacular panorama of the city. I also personally enjoyed getting lost in a park on top of the next hill along called Shevchenkivski Hai Park. There are some fun short walks to enjoy surrounded by a wood of pines and deciduous trees.`,

        `In short, the reputation of the city preceeds itself, and if you haven't heard of Lviv before, it won't be long before you do so after setting foot in Ukraine. Many will describe this as a Ukrainian Krakow, a city which enjoys more fame than Lviv does, and I once met a polish man who described Lviv as Krakow before Poland joined the EU. I suggest going to this city without such expectations, the city is altogether something different to Krakow. But don't take my word for it, Lviv should absolutely be on your bucket list.`,
      ],
      images: "{image}",
    },
  },
};

const loadGitHubUser = async function () {
  try {
    const data = await AJAX(GITHUB_USER_URL);
    return data;
  } catch (err) {
    throw err;
  }
};

const loadGitHubRepos = async function () {
  try {
    const data = await AJAX(GITHUB_REPO_URL);
    return data;
  } catch (err) {
    throw err;
  }
};

export const loadGitHub = async function () {
  try {
    const repoData = await loadGitHubRepos();
    const userData = await loadGitHubUser();

    //Send data to state
    state.github.user = userData.login;
    state.github.html = userData.html_url;
    state.github.name = userData.name;
    state.github.location = userData.location;
    state.github.avatar = userData.avatar_url;
    state.github.repos = repoData;
  } catch (err) {
    throw err;
  }
};
