function loadingBar(percentages){
    if(percentages === 100){
        console.log('100% Complete!');
        console.log(`[${'%'.repeat(10)}]`);
        return;
    }

    function printLoading(percentages, percentagesSymbolCount ,dotSymbolCount)
    {
        console.log(`${percentages}% [${'%'.repeat(percentagesSymbolCount)}${'.'.repeat(dotSymbolCount)}]`);
        console.log('Still loading...');
    }

    const percentagesSymbolCount = percentages / 10;
    const dotSymbolCount = 10 - percentagesSymbolCount;

    printLoading(percentages, percentagesSymbolCount, dotSymbolCount);
}

loadingBar(100);
loadingBar(50);
loadingBar(30);