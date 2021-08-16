export const scrollContainerLeft = (id: string) => {
    let scrollFactor = 450;
    const el: HTMLElement = document.getElementById(id)!;
    el.scrollTo({
        left: el.scrollLeft - scrollFactor,
        behavior: "smooth",
    });
}

export const scrollContainerRight = (id : string) => {
    let scrollFactor = 450;
    const el: HTMLElement = document.getElementById(id)!;
    el.scrollTo({
        left: el.scrollLeft + scrollFactor,
        behavior: "smooth",
    });
}
