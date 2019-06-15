function game_2048_setting(container)
{
    this.container = container;
    this.cells = new Array(16);
}
 
game_2048_setting.prototype = {
    // iniatialize
    init: function(){
        for(var i = 0, cells_len = this.cells.length; i < cells_len; i++){
            var cell = this.new_cell(0);
            cell.setAttribute("index", i);
            this.container.appendChild(cell);
            this.cells[i] = cell;
        }
        this.random_cell();
        this.random_cell();
    },

    // 產生一個cell
    new_cell: function(val){
        var cell = document.createElement("div");
        this.set_cell_val(cell, val)
        return cell;
    },

    // 設定cell的值
    set_cell_val: function(cell, val){
        cell.className = "tile tile" + val;
        cell.setAttribute("val", val);
        cell.innerHTML = val > 0 ? val : '';
    },

    // 隨機位置產生一個cell的meta data
    random_cell: function(){
        var zero_cells = [];
        for(var i = 0, cells_len = this.cells.length; i < cells_len; i++){
            if(this.cells[i].getAttribute("val") == 0){
                zero_cells.push(this.cells[i]);
            }
        }
        var random_cell_pos = zero_cells[Math.floor(Math.random() * zero_cells.length)];
        this.set_cell_val(random_cell_pos, Math.random() < 0.8 ? 2 : 4);
    },

    // 移動
    move:function(direction){
        var j;
        switch(direction){
            case 38:
                for(var i = 4, cells_len = this.cells.length; i < cells_len; i++){
                    j = i;
                    while(j >= 4){
                        this.merge(this.cells[j - 4], this.cells[j]);
                        j -= 4;
                    }
                }
                break;
            case 40:
                for(var i = 11; i >= 0; i--){
                    j = i;
                    while(j <= 11){
                        this.merge(this.cells[j + 4], this.cells[j]);
                        j += 4;
                    }
                }
                break;
            case 37:
                for(var i = 1, len = this.cells.length; i < len; i++){
                    j = i;
                    while(j % 4 != 0){
                        this.merge(this.cells[j - 1], this.cells[j]);
                        j -= 1;
                    }
                }
                break;
            case 39:
                for(var i = 14; i >= 0; i--){
                    j = i;
                    while(j % 4 != 3){
                        this.merge(this.cells[j + 1], this.cells[j]);
                        j += 1;
                    }
                }
                break;
        }
        this.random_cell();
    },

    // 兩格之間數字一樣要合成時
    merge: function(prev_cell, current_cell){
        var prevVal = prev_cell.getAttribute("val");
        var current_val = current_cell.getAttribute("val");
        if(current_val != 0){
            if(prevVal == 0){
                this.set_cell_val(prev_cell, current_val);
                this.set_cell_val(current_cell, 0);
            }
            else if(prevVal == current_val){
                this.set_cell_val(prev_cell, prevVal * 2);
                this.set_cell_val(current_cell, 0);
            }
        }
    },

    // 比較兩格的值是否一樣
    equal: function(cell1, cell2){
        return cell1.getAttribute("val") == cell2.getAttribute("val");
    },

    // 尋找有沒有cell到達2048
    max: function(){
        for(var i = 0, len = this.cells.length; i < len; i++){
            if(this.cells[i].getAttribute("val") == 2048){
                return true;
            }
        }
    },

    // 檢查game over
    over: function(){
        for(var i = 0, len = this.cells.length; i < len; i++){
            // 還有沒有空位置
            if(this.cells[i].getAttribute("val") == 0){
                return false;
            }
            // 右邊一格還可不可以合成
            if(i % 4 != 3){
                if(this.equal(this.cells[i], this.cells[i + 1])){
                    return false;
                }
            }
            // 下面一格還可不可以合成
            if(i < 12){
                if(this.equal(this.cells[i], this.cells[i + 4])){
                    return false;
                }
            }
        }
        return true;
    },

    // 清除
    clean: function(){
        for(var i = 0, len = this.cells.length; i < len; i++){
            this.container.removeChild(this.cells[i]);
        }
        this.cells = new Array(16);
    }
}
 