import data from "./airplanes.js";

const airplaneListBox = document.getElementById("container");

// show items from airlanes list
let result = "";

data.forEach((item) => {
	result += `<!-- airplan item -->
    <div class="airplane__item" id=${item.id}>
        <div class="airplane__icon">
            <img src="./assets/airplane.svg" alt="airplane">
        </div>
        <p class="airplane__name">${item.name}</p>

    </div>`;
});

airplaneListBox.innerHTML = result;
// =========================

//? when content loaded in the screen this section was runed
document.addEventListener("DOMContentLoaded", () => {
	const modal = document.querySelector(".modal");
	const list = document.querySelectorAll(".airplane__item");

	//* ============ handle modal Close ==================
	const closeModalButton = document.querySelector(".close__icon");
	closeModalButton.addEventListener("click", () => {
		modal.classList.remove("show__modal");
	});
	//* ============================================

	const modalBoxItem = document.querySelector(".modal__items");

	list.forEach((listItem) => {
		listItem.addEventListener("click", (e) => {
			modal.classList.add("show__modal");
            
            // get an id was clicked on it
			const id = e.target.id; 
			const itemData = data.filter((item) => item.id === +id);
			let item = "";

			if (itemData.length !== 0) {
				itemData[0].trips.forEach((trip) => {
					item += `
                        <!-- airplane info -->
                        <div class="airplane__info__box">
                            <div class="airplane__info__icon">
                                <img src="./assets/airplane_black.svg" alt="icon" />
                            </div>
                            <div class="airplane__info__item">
                                <p>${trip.origin}</p>
                                <p>${trip.destination}</p>
                            </div>
                            <p class="airplane__info__date">${trip.date}</p>
                        </div>
                    `;
				});
			} else {
				item = `<img class="loading__gif" src="./assets/loading.gif" alt="background" />`;
			}

			modalBoxItem.innerHTML = item;
		});
	});
});

// ? =======================================================
