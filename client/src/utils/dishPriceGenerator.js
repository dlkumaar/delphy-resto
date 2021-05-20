export default function dishPrice() {
	const randomNumber = Math.floor(Math.random() * 5) + 1;

	return Math.floor(Math.random() * 100 * randomNumber);
}
