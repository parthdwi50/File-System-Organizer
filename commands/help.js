function helpFn() {
    console.log(`
    List of All the commands:
                 For Help type: pdfile help
                 For Organizing type: pdfile organize "directoryPath"
                 For Tree structure type: pdfile tree "directoryPath"


                `);
}
module.exports={
    helpKey: helpFn
}
