function add_recipe() {
    if (sessionStorage.getItem("login") == true) {
        window.location.href = "../add_recipe_page/add_recipe.html";
    }
    else {
        window.location.href = "../sign_up_login_page/sign_up_login.html";
        alert("You should login first");
    }
}

function getRecipeIndex() {
	if (localStorage) {
		if (localStorage.getItem("recipeIndex") == null) localStorage.setItem("recipeIndex", 0);
		else return localStorage.getItem("recipeIndex");
	}
	else {
		alert("Sorry, your browser does not support local storage");
	}
}

function insertRecipes() {
	if (localStorage) {
        if (localStorage.getItem("inserted") == null) {
            var index = getRecipeIndex();
		var caesar_salad = {"category": "starters", "name": "Caesar Salad", "author": "Natasha Kravchuk", 
		"description": "My son, David, is to thank for this recipe. He is 9 years old and took kids cooking classes at Sur La Table where he learned and fell in love with this caesar salad recipe, so we re-created it at home together. Caesar salad is easy, classic and the ingredients are simple. "
		+ "The crunchy homemade garlic croutons really elevate this salad, making it look and taste quite fancy. "
		+ "The cheese crusted onto each little toast will have you snacking on these croutons!The caesar salad dressing comes together so fast and all you need is a bowl and whisk. "
		+ "This Caesar dressing is light, healthy and packs so much fresh flavor without needing much salt at allIn a large mixing bowl, combine all of your ingredients and toss gently to coat the lettuce in caesar dressing. "
		+ "This recipe makes enough croutons for two full salads so you’ll have them ready to go for round 2!",
		"ingredients": "For the Croutons:\n"
		+ "1/2 French Baguette cut in half and thinly sliced (1/4\" thick)\n"
		+ "3 Tbsp extra virgin olive oil\n"
		+ "1 tsp minced garlic 2 small cloves\n"
		+ "2 Tbsp grated parmesan cheese\n"
		+ "Caesar Salad dressing:\n"
		+ "2 small garlic cloves minced (1 tsp)\n"
		+ "2 tsp dijon mustard\n"
		+ "1 tsp Worcestershire sauce\n"
		+ "2 tsp fresh lemon juice\n"
		+ "1 1/2 tsp red wine vinegar\n"
		+ "1/3 cup extra virgin olive oil\n"
		+ "1/2 tsp sea salt or to taste\n"
		+ "1/8 tsp black pepper plus more to serve\n"
		+ "For the Caesar Salad:\n"
		+ "1 large romaine lettuce (or 2 small heads romaine)\n"
        + "1/3 cup parmesan cheese shredded or shaved", 
        "instructions": "1.	Preheat oven to 350˚F. Cut the baguette in half lengthwise through the top of the baguette then slice diagonally into 1/4\" thick pieces. Place the breads onto a baking sheet.\n"
		+ "2.	In a small bowl, combine 3 Tbsp extra virgin olive oil and 1 tsp of finely minced garlic. Drizzle the garlic oil over the croutons and sprinkle the top with 2 Tbsp grated parmesan cheese.\n"
		+ "3.	Toss until evenly coated. Spread in a single layer over the baking sheet and bake at 350˚F until light golden and crisp (10-12 minutes), or to desired crispness.\n"
		+ "How to Make Caesar Salad Dressing:\n"
		+ "1.	In a small bowl, whisk together garlic, dijon, Worcestershire, lemon juice and red wine vinegar.\n"
		+ "2.	Slowly drizzle in extra virgin olive oil while whisking constantly.\n"
		+ "Whisk in 1/2 tsp salt and 1/8 tsp black pepper, or season to taste.\n"
		+ "How to Make Caesar Salad:\n"
		+ "1.	Rinse, dry and chop or tear the romaine into bite-sized pieces.\n"
		+ "2.	Place in a large serving bowl and sprinkle generously with shredded parmesan cheese and cooled croutons.\n"
        + "3.	Drizzle with caesar dressing and toss gently until lettuce is evenly coated."}
        localStorage.setItem(index, JSON.stringify(caesar_salad));

        index = getRecipeIndex();
        var falafel = {"category": "starters", "name": "Falafel", "author": "Lisa Bryan",
        "description": "Falafel are delicious balls of chickpea and herb goodness that you find in Middle Eastern cooking. Naturally vegan and vegetarian, falafel are great in wraps, pitas, sandwiches and salads. Today, I’ll share how to make both fried falafel and baked falafel. You choose your favorite! "
        + "Are you ready for the best falafel you’ve ever tasted? I’ve had my fair share of falafel on travels through Egypt, Israel and Jordan. " 
        + "I’ve had them in restaurants and on street corners (about as authentic as they come). I’ve had them stuffed in gluten-free pita and on salads. And I’ve had them with slight variations and tweaks, though the recipe itself is fairly simple. "
        + "But after eating my way through Tel Aviv last year, I realised what makes the best falafel. And here’s the answer: tons of herbs (double the normal amount) and a small amount of green pepper. "
        + "This makes for an addictive flavor that’s “a little something extra” but not spicy. Just insanely delicious.Traditional falafel is made from ground chickpeas or fava beans, herbs and spices. "
        + "The mixture is then formed into balls or patties and deep fried for a texture that’s crispy on the outside and soft on the inside, sort of like a fritter. It’s a classic Middle Eastern and Mediterranean recipe that’s enjoyed as street food and often served up as part of mezze (a group of small meals). ",
        "ingredients": "1 cup dried chickpeas, soaked overnight (don't use canned chickpeas)\n"
        + "1/2 cup onion, roughly chopped\n"
        + "1 cup parsley, roughly chopped (about a one large bunch)\n"
        + "1 cup cilantro, roughly chopped (about a one large bunch)\n"
        + "1 small green chile pepper, serrano or jalapeno pepper\n"
        + "3 garlic cloves\n"
        + "1 tsp cumin\n"
        + "1 tsp salt\n"
        + "1/2 tsp cardamom\n"
        + "1/4 tsp black pepper\n"
        + "2 tbsp chickpea flour\n"
        + "1/2 tsp baking soda\n"
        + "avocado oil for frying",
        "instructions": "1.	The night before, soak the dried chickpeas in water. Make sure the water covers the chickpeas by 2-3 inches, as they'll triple in size. Dried chickpeas soaking in a bowl of water.\n"
        + "2.	Drain and rinse the chickpeas and add them to your food processor, along with the onion, parsley, cilantro, pepper, garlic, cumin, salt, cardamom and black pepper.\n"
        + "3.	Pulse the food processor several times until the mixture resembles the texture of coarse sand.\n"
        + "4.	Transfer the falafel mixture to a bowl and add the chickpea flour and baking soda. Stir together, then cover or add a lid and refrigerate the mixture for 30 minutes to one hour. Falafel ingredients in a mixing bowl.\n"
        + "5.	Use your hands, an ice cream scoop or falafel scoop to form the falafel into balls or patties. If you find the mixture is too wet, you can add another tablespoon of chickpea flour. If it's too dry and crumbly, you can add a teaspoon or two of water or lemon juice. Scooping balls of falafel from the raw mixture.\n"
        + "6.	Once the falafel are formed, you can cook them by your preferred method mentioned above. To deep fry the falafel, add about 3 inches of oil to a pot on medium heat. Heat the oil to 350F. Cook the falafel in batches (about 6-8 at a time) for 1-2 minutes or until golden.\n"
        + "7.	Cooking the falafel in a pan of oil on the stove.\n"
        + "Use a skimmer to check the color of the falafel and make sure they don't over cook. Then remove them to a paper towel-lined plate.\n"
        + "Removing the falafel from the pan once they're cooked and golden.\n"
        + "Serve the falafel immediately, while warm and crispy on the outside. They're delicious served with tahini sauce as well.\n"}
        localStorage.setItem(index, JSON.stringify(falafel));
        
        index = getRecipeIndex();
        var mangolian_beef = {"category": "main_dishes", "name": "Easy Mongolian Beef", "author": "Sabrina Snyder",
        "description": "Mongolian Beef is a recipe that I’ve been cooking for clients for many years for a number of reasons. One, people love anything that tastes like Chinese takeout.\n" 
        + "Two, the sweet flavor of the dark brown sugar mixed with the salty soy sauce and the strong ginger and garlic is incredibly addicting and three you get to enjoy it over a mountain of steamed rice, which if you are anything like me is your happy place.\n"
        + "This Mongolian Beef is very flavorful and takes just 30 minutes to make from start to finish including all the slicing of the meat! It also uses basic pantry ingredients so don’t worry I am not sending you to the store today for oyster sauce or hoisin sauce. Everything in this recipe is available in every grocery store. The one thing I want to caution when preparing this dish is how thick you slice the steak.\n"
        + "If you feel uncomfortable with cutting the steak thinly enough and have an hour or so notice, place the steak in the freezer for one hour.\n"
        + "This will freeze it just enough that slicing it will be as easy as slicing a vegetable. The meat will firm up enough that you can slice it even thinner if you’d like. One more note because I know I am going to get this question in the comments below.\n"
        + "Yes, you can use light brown sugar in place of dark brown, and yes you will notice the taste difference. The addition of molasses to the dark brown sugar adds to the depth of flavor in this dish.\n"
        + "So if possible please use dark brown sugar. If you are in a pinch and you only have light brown don’t worry you will still have a very tasty meal. Just promise me the next time you make it you will use dark brown sugar, the flavor difference is noticeable.",
        "ingredients": "1 pound flank steak\n"
        + "1/4 cup cornstarch\n"
        + "1/4 cup canola oil\n"
        + "2 teaspoons fresh ginger, minced\n"
        + "1 tablespoon garlic, minced\n"
        + "1/3 cup lite soy sauce, low sodium\n"
        + "1/3 cup water\n"
        + "1/2 cup dark brown sugar\n"
        + "4 stalks scallions, green parts only, cut into 2 inch pieces",
        "instructions": "1.	Slice the flank steak against the grain (the grain is the length of the steak) the long way 1/4 inch think pieces and add it to a ziploc bag with the cornstarch.\n"
        + "2.	Press the steak around in the bag making sure each piece is fully coated with cornstarch and leave it to sit.\n"
        + "3.	Add the canola oil to a large frying pan and heat on medium high heat.\n"
        + "4.	Add the steak, shaking off any excess corn starch, to the pan in a single layer and cook on each side for 1 minute.\n"
        + "5.	If you need to cook the steak in batches because your pan isn't big enough do that rather than crowding the pan, you want to get a good sear on the steak and if you crowd the pan your steak with steam instead of sear.\n"
        + "6.	When the steak is done cooking remove it from the pan.\n"
        + "7.	Add the ginger and garlic to the pan and sauté for 10-15 seconds.\n"
        + "8.	Add the soy sauce, water and dark brown sugar to the pan and let it come to a boil.\n"
        + "9.	Put the steak back in and let the sauce thicken for 20-30 seconds.\n"
        + "10.	The cornstarch we used on the steak should thicken the sauce, if you find it isn't thickening enough add 1 tablespoon of cornstarch to 1 tablespoon of cold water and stir to dissolve the cornstarch and add it to the pan.\n"
        + "11.	Add the green onions, stir to combine everything, and cook for a final 20-30 seconds.\n"
        + "Serve immediately."}
        localStorage.setItem(index, JSON.stringify(mangolian_beef));

        index = getRecipeIndex();
        var lasagna = {"category": "main_dishes", "name": "The Most Amazing Lasagna!", "author": "The Most Amazing Lasagna!",
        "description": "WHAT KIND OF CHEESE DO I USE IN LASAGNA?\n"
        + "There are three kinds of cheese in this recipe. First you have the classic lasagna filling of ricotta cheese. Use whole milk ricotta cheese in this recipe for best results. The second cheese is sliced mozzarella. We like to get our mozzarella sliced at the deli counter in our grocery store. You want the slices to be pretty thin. 24 slices is the ideal amount and it should equal somewhere around one pound. Third, you’ll need freshly grated Parmesan cheese. Don’t use shredded, you’ll want grated for best results. Also, don’t use that canned stuff. It doesn’t melt the same as real, freshly grated Parmesan cheese.\n"
        + "\n"
        + "DO I NEED TO USE TOMATO PASTE?\n"
        + "You’ll notice that two cans of tomato paste are used in this recipe. It may seem like a lot, but tomato paste has a super concentrated tomato flavor. By adding in so much, we’re able to get a nice, strong tomato flavor, without adding too much liquid to the sauce.\n"
        + "\n"
        + "DO I HAVE TO USE FENNEL SEEDS?\n"
        + "The blend of herbs included in this bolognese is perfect. The fresh herbs all combine to produce the best flavor, and the key to bringing it all together: fennel seeds. You need the fennel seeds for that authentic, Italian flavor.\n"
        + "\n"
        + "WHY IS THERE SUGAR IN THE SAUCE?\n"
        + "Sugar is added to balance the acidity of the tomato. If you prefer to not use sugar, finely chopped carrots are another option, as they are naturally sweet and add another vegetable and flavor to your sauce. Use about a cup in place of the sugar.\n"
        + "\n"
        + "DO I HAVE TO SIMMER THE SAUCE FOR SO LONG?\n"
        + "The sauce develops flavor as it simmers. It needs to be simmered for a minimum of 1 hour to give you the most amazing lasagna, but you can simmer it up to 4 hours for maximum flavor results. It’s worth every second and doesn’t require much effort at all. If you don’t want to leave it simmering on the stove, you can always transfer it all to a slow cooker and simmer it in there on high for 4 hours or low for 6 to 8 hours.\n"
        + "\n"
        + "CAN I USE DRIED HERBS IN THIS RECIPE?\n"
        + "Yes. We love the flavor that comes from the fresh herbs, but we know that it isn’t always an option. If you need to use dried herbs, use them in a third of the amount of fresh herbs called for.\n"
        + "\n"
        + "WHAT IS A LASAGNA PAN? CAN I JUST USE A REGULAR 9×13 PAN?\n"
        + "Lasagna Pans are not the same as 9 x 13 casserole pans. Lasagna pans are deeper in order to accommodate for the layers in the dish. A true lasagna has four layers of noodles, which usually fit pretty nicely in a lasagna pan. If you like lasagna, it is a great investment",
        "ingredients": "1 pound sweet Italian sausage\n"
        + "1 pound lean ground beef\n"
        + "1 large white onion diced\n"
        + "5 cloves garlic minced\n"
        + "1 (28 ounce) can crushed tomatoes\n"
        + "2 (6 ounce) cans tomato paste\n"
        + "1 (15 ounce) can tomato sauce\n"
        + "1/2 cup white wine\n"
        + "2 tablespoons white sugar\n"
        + "1/2 cup chopped fresh basil\n"
        + "1 teaspoon fennel seeds\n"
        + "1 teaspoon ground oregano\n"
        + "1/2 teaspoon salt\n"
        + "1/4 teaspoon ground black pepper\n"
        + "1/4 cup chopped fresh parsley\n"
        + "1 pound lasagna noodles\n"
        + "30 ounces ricotta cheese\n"
        + "2 tablespoons chopped fresh parsley\n"
        + "1 large egg",
        "instructions": "1.	In a large pot over medium heat, add in ground sausage and ground beef. Use a spoon to break up the meat into small pieces. Add in onion and garlic and cook until meat is well browned, stirring constantly. Stir in sugar, fresh basil, fennel, oregano, 1/2 teaspoon salt, pepper, and 1/4 cup chopped parsley. Pour in crushed tomatoes, tomato paste, tomato sauce, and wine*. Stir well and bring to a simmer. Reduce heat to low and simmer 1-4 hours, stirring occasionally.\n"
        + "2.	Meanwhile, place lasagna noodles into the bottom of a pan. Pour hot tap water directly over the noodles, making sure the pasta is completely immersed in the water. Let them soak for 30 minutes, then drain and discard water.\n"
        + "3.	In a mixing bowl, combine ricotta cheese with egg, remaining 2 tablespoons parsley, 1/2 teaspoon salt, and nutmeg. Refrigerate until ready to assemble lasagna. Preheat oven to 375 degrees. Lightly grease a deep 9x13 pan.\n"
        + "4.	To assemble, spread about 1 cup of meat sauce in the bottom of the prepared pan. Place 4 noodles on top. Spread with 1/3 of the ricotta cheese mixture. Top with 1/4 of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, then sprinkle with 1/4 cup parmesan cheese. Repeat layering two more times to create three complete layers. To finish, place a final layer of pasta, topped with another 1 cup of meat sauce to cover the pasta. Top with remaining mozzarella and Parmesan cheese. Cover loosely with aluminum foil.\n"
        + "5.	Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes to allow cheese to brown. Serve hot."}
        localStorage.setItem(index, JSON.stringify(lasagna));

        localStorage.setItem("inserted", true);
        }
    }
	else {
		alert("Sorry, your browser does not support local storage");
	}
}