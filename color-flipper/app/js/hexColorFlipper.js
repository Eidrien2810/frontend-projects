export default function hexColorFlipper(colorText, button, container) {
    const d = document,
    $ = selector => d.querySelector(selector),
    $_ = selector => d.querySelectorAll(selector);

    const $colorText = $(colorText),
        $container = $(container);
    const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    const getHexColor = function (colorPalette) {
        const hexColor = [];
        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * colorPalette.length - 1) + 1;
            hexColor.push(colorPalette[random]);
        }
        return "#" + hexColor.join('')
    }
    d.addEventListener('click', e => {
        if (e.target.matches(button)){
            const color = getHexColor(hexChars);
            $container.style.backgroundColor = color;
            $colorText.textContent = color;
        }
    })
}