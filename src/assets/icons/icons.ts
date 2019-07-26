import { library } from "@fortawesome/fontawesome-svg-core";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons/faRedditAlien";
import { faTumblr } from "@fortawesome/free-brands-svg-icons/faTumblr";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons/faPinterestP";

const icons = [faFacebookF, faTwitter, faPinterestP, faRedditAlien, faTumblr];

library.add(...icons);
