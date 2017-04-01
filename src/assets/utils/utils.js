/**
 * Created by jessic on 2017/3/28.
 */
export default{
    uni(selector){
        return selector.replace(/::/g, ':')
    },
    ruleSelector(selector){
        var self=this;
        return Array.prototype.filter.call(Array.prototype.concat.apply([], Array.prototype.map.call(document.styleSheets, function(x) {
            return Array.prototype.slice.call(x.cssRules);
        })), function(x) {
            return self.uni(x.selectorText) === self.uni(selector);
        });

    }
}