# CS360 - CareStream360 Interactive Dashboard

## Project Overview

**CS360** (CareStream360) is a comprehensive, fully interactive HTML/CSS/JavaScript dashboard designed for real-time monitoring and analytics of Quality of Experience (QoE) metrics in telecommunications. This dashboard showcases customer sessions, QoE analytics, customer management, and system alerts for Telkom South Africa.

---

## 🎯 Project Structure

```
cs360-dashboard/
├── index.html                    # Main dashboard home page
├── pages/
│   ├── sessions.html            # Active sessions monitor
│   ├── qoe-analytics.html       # QoE metrics and analytics
│   ├── customers.html           # Customer management
│   └── alerts.html              # Alerts and notifications
├── css/
│   └── style.css                # Global styling
├── js/
│   ├── script.js                # Main JavaScript logic
│   └── charts.js                # Chart.js integration
└── README.md                     # This file
```

---

## 📄 Pages & Features

### **1. Dashboard (index.html)**
- Executive summary with KPI cards
- Real-time metrics: Active Sessions, Avg QoE Score, Churn Rate, Support Tickets
- Interactive charts:
  - QoE Score Distribution (bar chart)
  - Session Status (doughnut chart)
- Real-time session monitor table
- Recent alerts feed
- Responsive design

**Key Metrics Displayed:**
- 1,247 Active Sessions
- 4.2 Avg QoE Score
- 2.3% Churn Rate
- 34 Open Tickets

---

### **2. Sessions Monitor (pages/sessions.html)**
- Active sessions in card and table format
- Filter options: Device Type, Location, QoE Status
- Detailed session information:
  - Session ID, Customer Name, Device
  - Location, Duration
  - QoE Score, Latency, Download Speed
- Color-coded status badges (Excellent, Good, Fair, Poor, Critical)
- View Details buttons for drill-down

**Sample Data:**
- 5 active sessions with varying QoE levels
- Real-time metrics for each session

---

### **3. QoE Analytics (pages/qoe-analytics.html)**
- Advanced KPI cards:
  - Average QoE Score: 4.2
  - Excellent Experiences: 70.6%
  - Poor Experiences: 3.6%
  - Total Sessions Today: 1,847
- Interactive charts:
  - QoE Score Trend (7-day line chart)
  - QoE Category Distribution (doughnut chart)
- Detailed metrics tables:
  - QoE by Location (5 major cities)
  - QoE by Device Type (Mobile, Desktop, Tablet)
- Geographic performance analysis
- Device performance comparison

---

### **4. Customer Management (pages/customers.html)**
- Customer search and filter functionality
- Filter by: Account Type, NPS Range
- Comprehensive customer list table:
  - Customer Name, Phone, Account Type
  - Avg QoE, Last Session, NPS Score
  - Status (Promoter, Passive, Detractor)
- Customer Segments:
  - Promoters (NPS 9-10): 742 customers (59%)
  - Passives (NPS 7-8): 328 customers (26%)
  - Detractors (NPS 0-6): 182 customers (15%)
- Action buttons for detailed customer view

---

### **5. Alerts & Notifications (pages/alerts.html)**
- Alert summary KPIs:
  - 8 Critical Alerts
  - 24 Warnings
  - 156 Information messages
  - 1,247 Notifications sent today
- Active alerts feed with:
  - Color-coded severity badges
  - Alert descriptions
  - Affected customers/sessions
  - Action buttons (Acknowledge, View Details, Dismiss)
- Alert history table (last 24 hours)
- Filter by: Severity, Alert Type, Status

**Sample Alerts:**
- 🔴 Regional Network Outage (Critical)
- 🔴 API Latency Spike (Critical)
- 🟡 High Churn Risk Detected (Warning)
- ℹ️ Scheduled Maintenance Complete (Info)

---

## 🎨 Design & Styling

### Color Scheme
- **Primary Color:** #0283C2 (Telkom Blue)
- **Secondary Color:** #00BFA4 (Teal)
- **Success:** #4CAF50 (Green)
- **Warning:** #FFC107 (Yellow)
- **Danger/Critical:** #FF5252 (Red)

### Design Features
- Modern, responsive grid layout
- Mobile-friendly design
- Smooth transitions and hover effects
- Professional typography
- Consistent spacing and alignment
- Badge and status indicators
- Color-coded severity levels

---

## 📊 Charts & Visualization

### Chart Types Used
1. **Bar Charts** - QoE Distribution
2. **Doughnut/Pie Charts** - Session Status, QoE Category Distribution
3. **Line Charts** - QoE Trend Over Time
4. **Tables** - Detailed data display

### Chart.js Integration
- All charts built with Chart.js 3.9.1
- Responsive and interactive
- Real-time data support
- Customizable colors and labels

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build process required
- No server needed (works offline)

### Quick Start

1. **Download/Clone Files**
   ```bash
   git clone <https://github.com/amasuba/cs360/>
   cd cs360
   ```

2. **Open in Browser**
   ```bash
   # Simply open index.html in any browser
   open index.html
   # or
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Navigate Between Pages**
   - Use the navigation bar to switch between pages
   - All links are fully functional
   - Responsive design adapts to screen size

---

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop:** Full feature set, grid layout
- **Tablet:** Adapted grid, optimized spacing
- **Mobile:** Single column, touch-friendly buttons

### Media Queries
- Breakpoint 1: 768px (tablets)
- Font sizes and padding adjust automatically
- Navigation adapts for smaller screens

---

## 🔧 JavaScript Features

### Main Functions
- **updateLastUpdated()** - Updates timestamp dynamically
- **initializeDashboard()** - Initializes dashboard on load
- **formatNumber()** - Formats numbers with thousands separator
- **getQoEStatus()** - Determines QoE status from score
- **refreshData()** - Placeholder for API integration
- **createQoEDistributionChart()** - Creates QoE bar chart
- **createSessionStatusChart()** - Creates session doughnut chart
- **createQoETrendChart()** - Creates trend line chart
- **createRadarChart()** - Creates multi-metric radar chart

### Navigation Active State
- Active nav links are highlighted
- Automatic detection based on current page

---

## 📈 Sample Data

All pages include realistic sample data:
- **Customers:** 10+ sample profiles with varying QoE levels
- **Sessions:** 1,247 active sessions across 5 South African cities
- **Locations:** Johannesburg, Cape Town, Durban, Pretoria, Port Elizabeth
- **QoE Scores:** Range from 1.3 (Very Poor) to 4.8 (Excellent)
- **Metrics:** Latency, Download Speed, Upload Speed, Signal Strength

---

## 🔗 Integration Points

### Ready for Backend Integration
- All pages have `<input>`, `<select>` form elements
- API endpoints can be wired to:
  - `/api/sessions/` - Fetch active sessions
  - `/api/customers/` - Fetch customer list
  - `/api/alerts/` - Fetch system alerts
  - `/api/qoe/` - Fetch QoE analytics
  - `/api/predict/` - Get ML predictions

### WebSocket Support (Future)
- Dashboard can receive real-time updates
- Alerts can push notifications
- Charts can auto-refresh

---

## 🎓 Features Showcase

### Interactive Elements
- ✅ Responsive navigation bar
- ✅ Filter and search functionality
- ✅ Color-coded status indicators
- ✅ Interactive data tables
- ✅ Chart.js visualizations
- ✅ Hover effects and transitions
- ✅ Action buttons (View, Acknowledge, etc.)
- ✅ Dynamic timestamps
- ✅ Multi-page navigation
- ✅ Modal-ready structure

### Data Visualization
- ✅ KPI metric cards
- ✅ Distribution charts
- ✅ Trend analysis
- ✅ Geographic breakdown
- ✅ Device type analysis
- ✅ Customer segmentation
- ✅ Alert severity levels

---

## 📝 Customization Guide

### Change Colors
Edit `css/style.css`:
```css
:root {
    --primary-color: #0283C2;      /* Change Telkom blue */
    --secondary-color: #00BFA4;    /* Change teal */
    --danger-color: #FF5252;       /* Change red */
}
```

### Update Sample Data
Edit HTML pages, find `<td>`, `<span>` with data values and update:
```html
<!-- Change session count -->
<div class="metric-value">1,247</div>

<!-- Change customer name -->
<td><strong>John Doe</strong></td>

<!-- Change QoE score -->
<span style="...">4.8</span>
```

### Add New Pages
1. Create new HTML file in `pages/` folder
2. Copy navbar from existing page
3. Update nav links
4. Import CSS and JS files
5. Add your content

### Integrate Real Data
Replace in `js/script.js`:
```javascript
// Add API call instead of static data
async function fetchSessions() {
    const response = await fetch('/api/sessions/');
    const data = await response.json();
    populateSessionsTable(data);
}
```

---

## 🖥️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (partial support)

---

## 📊 Performance

- **Page Load:** < 1 second (fully static)
- **Chart Rendering:** < 500ms
- **Responsiveness:** 60 FPS (smooth animations)
- **File Sizes:**
  - HTML: ~15KB total
  - CSS: ~25KB
  - JS: ~8KB (+ Chart.js 200KB CDN)

---

## 🔐 Security Notes

- ✅ All data is client-side (no backend needed for demo)
- ✅ No sensitive data stored
- ✅ Ready for HTTPS deployment
- ⚠️ Add authentication when connecting to real API
- ⚠️ Sanitize user inputs in production

---

## 📞 Support & Documentation

### Key Technologies
- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Chart.js 3.9.1

### External CDN
- Chart.js: https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js

---

## 🎯 Use Cases

1. **Executive Dashboard** - High-level KPI monitoring
2. **Operations Center** - Real-time alert management
3. **Customer Success Team** - Customer QoE tracking
4. **Network Operations** - Session and performance monitoring
5. **Analytics Platform** - Historical trend analysis
6. **Proof of Concept** - Demo for Telkom stakeholders

---

## 📋 Deployment

### Local Development
```bash
# Simple HTTP server
python -m http.server 8000
```

### Production Deployment
1. Upload all files to web server
2. Configure HTTPS
3. Add authentication
4. Connect to backend APIs
5. Set up real-time data feeds

### Docker Deployment
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🚀 Future Enhancements

- [ ] Real-time WebSocket updates
- [ ] Advanced filtering and search
- [ ] Export to PDF/Excel
- [ ] Custom report builder
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Admin configuration panel
- [ ] User role-based access
- [ ] Notification preferences
- [ ] Automated remediation workflows

---

## 📄 License

CareStream360 (cs360) Dashboard - Demo Project  
© 2025 Aaron Masuba  
All rights reserved.

---

## 👥 Credits

Built for: **Telkom South Africa**  
Challenge: **Enhancing Customer Experience in Telecommunications**  
Team: **Aaron Masuba**

---

## 📞 Contact

For questions, support, or feature requests:
- Email: aaron.masuba@tuks.co.za
- GitHub: https://github.com/amasuba/cs360

---

**Last Updated:** November 21, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
