let find_busy_intervals = function(v1) {
    if (!v1 || v1.length === 0) {
        return;
    }

    let v2 = [];
    v2.push({
        'first': v1[0].first,
        'second': v1[0].second
    });
    for (let i = 0; i < v1.length; i++) {
        let x1 = v1[i].first;
        let y1 = v1[i].second;
        let x2 = v2[v2.length - 1].first;
        let y2 = v2[v2.length - 1].second;

        if (y2 >= x1) {
            v2[v2.length - 1].second = Math.max(y1, y2);
        } else {
            v2.push({
                'first': x1,
                'second': y1
            });
        }

    }
    return v2;
};
