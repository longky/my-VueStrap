<template>
  <doc-section id="mz-datepicker" name="Daterange">
    <div class="bs-example">
        <span>StartTime:{{startTime}}</span>
        <span>EndTime:{{endTime}}</span>
        <span>Time:{{time}}</span>

        <p><mz-datepicker ></mz-datepicker></p>
    <p>    
        <mz-datepicker format="yyyy-MM-dd" :start-time.sync="startTime" :end-time.sync="endTime" range en confirm :on-confirm="confrim"></mz-datepicker>
    </p>
    <p>
        <mz-datepicker format="yyyy-MM-dd" :start-time.sync="startTime" :end-time.sync="endTime" range clearable></mz-datepicker>
    </p>
    <p>
        <mz-datepicker format="yyyy-MM-dd HH:mm:ss" clearable :time.sync="time"></mz-datepicker>
    </p>
    <p>
        <mz-datepicker disabled></mz-datepicker>
    </p>
    <br/>
    <doc-code language="markup">
        <mz-datepicker format="yyyy-MM-dd HH:mm:ss" clearable :time.sync="time"></mz-datepicker>
        <mz-datepicker format="yyyy-MM-dd" :start-time.sync="startTime" :end-time.sync="endTime" range ch ></mz-datepicker>
    </doc-code>
    <doc-table>
      <div>
        <p>range</p>
        <p><code>Boolen</code></p>
        <p>false</p>
        <p>是否range模式使用</p>
      </div>
      <div>
        <p>time</p>
        <p><code></code></p>
        <p></p>
        <p>时间(支持sync双向)</p>
      </div>
      <div>
        <p>start-time</p>
        <p><code></code></p>
        <p></p>
        <p>开始时间（range模式使用）</p>
      </div>
      <div>
        <p>end-time</p>
        <p><code></code></p>
        <p></p>
        <p>开始时间（range模式使用）</p>
      </div>
      <div>
        <p>width</p>
        <p><code>String</code></p>
        <p>214px</p>
        <p>Width of the input DOM</p>
      </div>
      <div>
        <p>format</p>
        <p><code>String</code></p>
        <p><code>yyyy-MM-dd</code></p>
        <p>The date format, combination of d, dd, M, MM, MMM, MMMM, yyyy.</p>
      </div>

      <div>
        <p>clearable</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>If <strong>true</strong> shows an &times; shaped button to clear the selected date.
          Usefull in forms where date entry is optional.</p>
      </div>
      <div>
        <p>disabled</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>禁用</p>
      </div>
      <div>
        <p>confirm</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>是否显示确认按钮</p>
      </div>
      <div>
        <p>onConfirm</p>
        <p><code>function</code></p>
        <p>false</p>
        <p>仅confirm为true时可用</p>
      </div>
      <div>
        <p>en</p>
        <p><code>Boolean</code></p>
        <p>false</p>
        <p>是否启用英文界面</p>
      </div>
      onConfirm
    </doc-table>
  </div>
  <div></div>
</template>

<script>
import docSection from './docSection.vue'
import docTable from './docTable.vue'
import docCode from './docCode.vue'
import checkbox from 'src/Checkbox.vue'
import mzDatepicker from 'src/Daterange.vue'
import vSelect from 'src/Select.vue'
import vOption from 'src/Option.vue'

export default {
  components: {
    docSection,
    docTable,
    docCode,
    checkbox,
    mzDatepicker,
    vSelect,
    vOption
  },
  data () {
    return {
      time: new Date(),
      startTime: new Date().getTime(),
      endTime: new Date().getTime()
    }
  },
  methods:{
      confrim:function(startTime,endTime){
          console.log(startTime);
          console.log(endTime);
      }
  }
}
</script>
